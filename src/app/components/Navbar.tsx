"use client"
import {Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "Fixtures",
      "Teams",
      "Country & season",
      "Leagues",
      "Statistics",
      "Help & Feedback",
    ];
  
    return (
      <Nav onMenuOpenChange={setIsMenuOpen} className="bg-black text-slate-200 ">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image src="/soccer.svg" alt="soccer" width={32} height={32} />
            <p className="font-bold text-inherit">FootyFlick</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menuItems.map((item, index)=>(
                <NavbarItem key={`${item}-${index}`}>
                    <Link color="foreground" className="text-slate-200" href="#">{item}</Link>
                </NavbarItem>
            ))}
        </NavbarContent>
        <NavbarMenu className="bg-black " >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full text-slate-200 "
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Nav>
    )
}

export default Navbar