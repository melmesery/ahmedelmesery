"use client";

import Image from "next/image";
import Link from "next/link";
import { getProfile } from "../sanity/sanity-utils.ts";
import { useState } from "react";

export default function Logo() {
  const [logo, setLogo] = useState("");

  const fetchProfile = async () => {
    const { logo }: any = await getProfile();
    setLogo(logo);
    return;
  };
  fetchProfile();

  return (
    <>
      {logo && (
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="Ahmad-Elmesery-logo" width={55} height={55} />
        </Link>
      )}
    </>
  );
}
