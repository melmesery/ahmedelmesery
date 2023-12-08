import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProfile } from "../sanity/sanity-utils.ts";

export default async function Logo() {
  const { logo } = await getProfile();
  return (
    <>
      <Link href="/" className="cursor-pointer">
        <Image
          src={logo}
          alt="Ahmad-Elmesery-logo"
          width={30}
          height={30}
          className="rounded-full"
        />
      </Link>
    </>
  );
}
