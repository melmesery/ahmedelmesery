"use client";

import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-row items-center justify-center gap-5 mb-5">
        <FaLinkedinIn />
        <FaFacebookF />
        <FaBehance />
        <FaInstagram />
      </div>
      Ahmad Elmesery &copy; {new Date().getFullYear()}
    </div>
  );
}
