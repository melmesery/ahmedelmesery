"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import "../styles/Nav.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="nav_container bg-transparent"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="lg:-ml-28">
          <Logo /> 
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent
        className="nav_links hidden sm:flex gap-4 lg:-mr-28"
        justify="end"
      >
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
        <NavbarMenuItem>
          <Link href="/">Work</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/work/ahmad-elmesery-reel">Reel</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about">About</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
