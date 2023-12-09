import ReelDetails from "@/components/ReelDetails.tsx";
import { getReel } from "@/sanity/sanity-utils.ts";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import "@/styles/Reel.css";

export const revalidate = 10;

export default async function Work() {
  const reel = await getReel();
  const { content, url } = reel;
  return (
    <div className="reel_container">
      <section className="reel_video">
        <h3 className="reel_creator">Ahmad Elmesery</h3>
        <h1 className="reel_headline">
          Motion Reel {new Date().getFullYear()}
        </h1>
        <div className="reel">
          <iframe
            className="w-full aspect-video"
            title="vimeo-player"
            src={url}
            allowFullScreen
          ></iframe>
        </div>
        <div className="reel_content">
          <PortableText value={content} />
        </div>
      </section>

      <section className="reel_details">
        <ReelDetails />
      </section>

      <section className="view_projects">
        <Link href="/" className="view_button">
          View more projects
        </Link>
      </section>
    </div>
  );
}
