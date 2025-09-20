import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
 
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname: string) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate users before allowing them to upload files:
        // https://vercel.com/docs/blob/security#protecting-your-blob-store
 
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
          token: process.env.BLOB_READ_WRITE_TOKEN,
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client-side uploads
        // ⚠️ This will not work on `localhost` unless you have a public URL
        // for your localhost server and you configure a webhook for your blob store.
        console.log('blob upload completed', blob, tokenPayload);
 
        try {
          // Do something with the blob
        } catch (error) {
          throw new Error('Could not process blob');
        }
      },
    });
 
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}