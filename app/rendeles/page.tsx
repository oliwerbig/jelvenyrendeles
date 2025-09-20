import OrderForm from "../OrderForm";

export default function RendelesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-12">Rendelés</h1>
        <OrderForm />
      </div>
    </main>
  );
}
