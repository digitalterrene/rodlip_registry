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

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <List className="mb-4   flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <ListItem className="w-fit py-0">
        <Typography
          as="a"
          href="https://rodlip.org"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Website
        </Typography>
      </ListItem>{" "}
      <ListItem className="w-fit py-0">
        <Typography
          as="a"
          href="/terms_and_conditions"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Terms and Conditions
        </Typography>
      </ListItem>
      <ListItem className="w-fit py-0">
        <Typography
          as="a"
          href="/help"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Support
        </Typography>
      </ListItem>
    </List>
  );

  return (
    <div className="mx-auto sticky z-[999] top-0 justify-between pr-3 w-11/12 rounded-2xl   max-w-screen flex py-1 items-center   bg-white px-2 ">
      <div className=" flex   w-10/12  items-center">
        {" "}
        <Button
          variant="text"
          className="p-1 ml-4  h-8 w-8 text-xl"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <TbGridDots />
        </Button>{" "}
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 ml-2"
        >
          Rodlip Registry
        </Typography>
      </div>
      <div className="hidden w-3/4 bg-white lg:block">{navList}</div>
      <ProfileIcon />
    </div>
  );
}
