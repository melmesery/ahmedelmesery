"use client";

import Image from "next/image";
import Link from "next/link";
import { getProfile } from "../sanity/sanity-utils.ts";
import { useEffect, useState } from "react";

const Logo = () => {
  const [logo, setLogo] = useState("");

  const fetchProfile = async () => {
    const { image: fetchedLogo } = await getProfile();
    setLogo(fetchedLogo);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      {logo && (
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="Ahmad-Elmesery-logo" width={55} height={55} />
        </Link>
      )}
    </>
  );
};

export default Logo;
