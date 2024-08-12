import type { Photo } from "react-photo-album";
import { range } from "./range";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `/media/jelvenyrendeles/products/${asset}`;
}

const photos = [
  ...range(57, 1).map((num) => ({
    asset: `szalagosgalleria (${num}).jpg`,
    width: 3468 / 8,
    height: 4624 / 8,
    alt: "",
  }),)
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;
