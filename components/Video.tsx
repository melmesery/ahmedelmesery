import { getReel } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Video() {
  const reel = await getReel();
  const { url } = reel;
  return (
    <>
      <iframe
        className="w-full aspect-video"
        title="vimeo-player"
        src={url}
        allowFullScreen
      ></iframe>
    </>
  );
}
