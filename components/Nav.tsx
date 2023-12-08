"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react"; 
import Link from "next/link";
import { useState } from "react";
import "../styles/Nav.css";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="absolute nav_container bg-[#FEF2F6]"
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent className="nav_links hidden sm:flex gap-8" justify="end">
        <NavbarItem>
          <Link href="/">Work</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/work/ahmad-elmesery-reel">Reel</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="nav_mobile_links">
        <div className="h-[70%] grid items-center text-center">
          <NavbarMenuItem>
            <Link href="/">Work</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/reel">Reel</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about">About</Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
