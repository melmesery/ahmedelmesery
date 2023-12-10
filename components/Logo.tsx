"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.tsx";

export default function Logo() {
  const profile = useContext(ProfileContext);

  return (
    <>
      {profile?.logo && (
        <Link href="/" className="cursor-pointer">
          <Image
            src={profile?.logo}
            alt="Ahmad-Elmesery-logo"
            width={55}
            height={55}
           />
        </Link>
      )}
    </>
  );
}
