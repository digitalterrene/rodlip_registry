"use client";
import { useState, useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useGlobalContext } from "@/context/GlobalContext";
import ProfileIcon from "../ProfileIcon";
import Breadcrumb from "./Breadcrumb";
import SectionTitle from "./SectionTitle";
import { usePathname } from "next/navigation";
import BC from "./BC";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();
  const pathname = usePathname();
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
