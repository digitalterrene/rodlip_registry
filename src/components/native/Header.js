"use client";
import { useState, useEffect } from "react";
import BC from "./BC";
import ProfileIcon from "./ProfileIcon";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="mx-auto w-full bg-[#f5f3ff] sticky z-[999] top-0 justify-between     flex py-1 items-center px-2 ">
      <div className=" flex justify-between w-full pt-8 px-3">
        <BC />
        <ProfileIcon />
      </div>
    </div>
  );
}
