"use client";

import Image from "next/image";
import Link from "next/link";
import { getProfile } from "../sanity/sanity-utils.ts";
import { useEffect, useState } from "react";

// export default function Logo() {
//   const [logo, setLogo] = useState("");

//   const fetchProfile = async () => {
//     const { logo }: any = await getProfile();
//     setLogo(logo);
//     return;
//   };
//   fetchProfile();

//   return (
//     <>
//       {logo && (
//         <Link href="/" className="cursor-pointer">
//           <Image src={logo} alt="Ahmad-Elmesery-logo" width={55} height={55} />
//         </Link>
//       )}
//     </>
//   );
// }

const Logo = () => {
  const [logo, setLogo] = useState("");

  const fetchProfile = async () => {
    try {
      const { logo: fetchedLogo } = await getProfile();
      setLogo(fetchedLogo);
    } catch (error) {
      console.log(error);
    }
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
