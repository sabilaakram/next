"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineLocationOn, MdAddShoppingCart } from "react-icons/md";
import { Button } from "./ui/button";
import { MobileMenu } from "./navbarmobile";
import { Navbar } from "./navbardesktop";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-50 ">
      <div className="flex relative justify-between items-center md:px-10 md:py-2 px-2 py-1 bg-white">
        {" "}
        <Image
          src="/logo_black.png"
          alt="laptop Logo"
          width={100}
          height={100}
          className="md:h-10 md:w-32 "
        />
        <div className="flex md:pl-10 md:pr-10">
          <Navbar />
        </div>
        <div className="flex items-center md:gap-2 pr-2 gap-1">

          <MobileMenu />
          {/* <HiBars3BottomRight  size={25} className="md:hidden"/> */}
        </div>
      </div>
    </div>
  );
}

export default Header;