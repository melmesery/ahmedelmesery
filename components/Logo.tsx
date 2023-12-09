'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useProfile from "../hooks/useProfile.tsx";

export default function Logo() {
  const [logoData, setLogoData] = useState<any>({ logo: null });

  useEffect(() => {
    useProfile().then((data) => {
      setLogoData(data);
    });
  }, []);

  const { logo } = logoData;

  return (
    <>
      {logo && (
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            alt="Ahmad-Elmesery-logo"
            width={55}
            height={55}
            // className="rounded-full"
          />
        </Link>
      )}
    </>
  );
}
