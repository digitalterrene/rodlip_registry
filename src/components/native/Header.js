"use client";
import { useState, useEffect } from "react";
import BC from "./BC";
import ProfileIcon from "./ProfileIcon";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const { mini_heading, setMiniHeading } = useGlobalContext();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="mx-auto w-full bg-[#f5f3ff] sticky z-[999] top-0 justify-between     flex py-1 items-center px-2 ">
      <div className=" flex gap-4  justify-between   w-full  items-center px-3">
        <AiOutlineMenu
          className="text-black cursor-pointer text-xl"
          onClick={() => setMiniHeading(!mini_heading)}
        />
        <div className=" justify-between  flex items-center w-full">
          <BC />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}
