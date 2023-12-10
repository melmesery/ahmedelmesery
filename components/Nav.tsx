

import React from "react";
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
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Logo from "./Logo.tsx";
import "../styles/Nav.css";

export default function App() {
  return (
    <Navbar
      disableAnimation
      isBordered
      className="nav_container bg-transparent"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 lg:-ml-28" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
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
        <div className="min-h-[50vh] grid items-center justify-center text-center">
          <NavbarMenuItem>
            <Link href="/">Work</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/work/ahmad-elmesery-reel">Reel</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about">About</Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
