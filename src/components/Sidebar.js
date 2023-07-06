"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
  CardFooter,
  CardBody,
  Input,
  IconButton,
  Dialog,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  CardHeader,
  Drawer,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from "../assets/components/logo.png";
import {
  IoFingerPrint,
  IoFingerPrintOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import {
  HiOutlineChartBar,
  HiOutlineTemplate,
  HiOutlineUser,
} from "react-icons/hi";
import { RiSuitcaseLine } from "react-icons/ri";

import { FaBabyCarriage, FaUserSlash } from "react-icons/fa";
import { BsChevronDown, BsGlobeAmericas, BsPlusLg } from "react-icons/bs";
import { useGlobalContext } from "@/context/GlobalContext";
import { MdOutlineWhatshot } from "react-icons/md";
import Image from "next/image";
import regs from "../assets/components/registries.png";
import { BiDownArrow } from "react-icons/bi";
import Link from "next/link";
export default function MT_Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [selectedAccount, setSelectedAccount] = useState({});
  const [accessKey, setAccessKey] = useState("");
  const [participations, setParticipations] = React.useState([]);
  const [openLeft, setOpenLeft] = React.useState(true);
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();
  const pathname = usePathname();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  const [openDialog, setOpenDialog] = React.useState(toggleSidebar);

  const handleOpenDialog = () => setOpenDialog((cur) => !cur);

  const router = useRouter();
  const dashboard_routes = [
    {
      route: "Enterprises",
      link: "/small_medium_enterprises",
      icon: "https://cdn-icons-png.flaticon.com/128/6116/6116024.png",
    },
    {
      route: "corporations",
      link: "/corporations",
      icon: "https://cdn-icons-png.flaticon.com/128/9372/9372181.png",
    },
    {
      route: "sole Traders",
      link: "/sole_traders",
      icon: "https://cdn-icons-png.flaticon.com/128/5654/5654627.png",
    },
    {
      route: "Non Profits",
      link: "/non_profit_organizations",
      icon: "https://cdn-icons-png.flaticon.com/128/2967/2967188.png",
    },
    {
      route: "institutions",
      link: "/institutions",
      icon: "https://cdn-icons-png.flaticon.com/128/9490/9490815.png",
    },
    {
      route: "Real Estates",
      link: "/real_estates",
      icon: "https://cdn-icons-png.flaticon.com/128/602/602290.png",
    },
    {
      route: "users",
      link: "/users",
      icon: "https://cdn-icons-png.flaticon.com/128/5080/5080751.png",
    },
    {
      route: "virtual",
      link: "/virtual",
      icon: "https://cdn-icons-png.flaticon.com/128/10781/10781839.png",
    },
  ];
  const dashboard_routesc = [
    {
      route: "Entities",
      link: "/entities/small_medium_enterprises",
      icon: <RiSuitcaseLine />,
    },
    {
      route: "Registries",
      link: "/future_world_civilizations/registries",
      icon: <IoFingerPrintOutline />,
    },
    {
      route: "Trending",
      link: "/trending/small_medium_enterprises",
      icon: <MdOutlineWhatshot />,
    },
    {
      route: "Profile",
      link: "/profile",
      icon: <HiOutlineUser />,
    },
    {
      route: "signin",
      link: "/signin",
      icon: <IoShieldCheckmarkOutline />,
    },
  ];

  return (
    <React.Fragment className=" bg-red-900">
      <Drawer
        placement="left"
        open={toggleSidebar}
        onClose={() => setToggleSidebar(true)}
        className="overflow-y-auto h-full"
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={"/"}
            onClick={() => setToggleSidebar(false)}
            className="mb-2 flex items-center gap-4 p-4"
          >
            <Image src={logo} alt="brand" className="   w-16" />
            <Typography variant="h5" className=" p98ufds" color="blue-gray">
              Registry
            </Typography>
          </Link>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setToggleSidebar(false)}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <Card className="p-2 flex flex-col  z-40 overflow-x-clip  mx-auto justify-between    shadow-xl shadow-blue-gray-900/5">
          <div className=" ">
            <List className="p-0">
              <ListItem className="flex items-center">
                {" "}
                <IoFingerPrint className="h-5 w-5" />
                <Typography
                  color="blue-gray"
                  className="mr-auto ml-3 font-semibold"
                >
                  Registries
                </Typography>
              </ListItem>
              <div className="ml-3">
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={
                      "/registries/federal_ecopolitical_noble_assembly_committe"
                    }
                  >
                    Fenac
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/registries/employment_consumption_equating_agency"}
                  >
                    Ecea
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={
                      "/registries/morality_enforcement_and_retaintion_body"
                    }
                  >
                    Mearb
                  </Link>
                </ListItem>
              </div>
            </List>
            <List className="p-0">
              <ListItem className="flex items-center">
                {" "}
                <BsGlobeAmericas className="h-5 w-5" />
                <Typography
                  color="blue-gray"
                  className="mr-auto ml-3 font-semibold"
                >
                  Continents
                </Typography>
              </ListItem>
              <div className="ml-3">
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/north_america"}
                  >
                    North America
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/south_america"}
                  >
                    {" "}
                    South America
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/europe"}
                  >
                    {" "}
                    Europe
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/africa"}
                  >
                    {" "}
                    Africa
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/australia"}
                  >
                    {" "}
                    Austarlia
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/asia"}
                  >
                    Asia
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/continents/antarctica"}
                  >
                    Antarctica
                  </Link>
                </ListItem>
              </div>
            </List>
            <List className="p-0">
              <ListItem className="flex items-center">
                {" "}
                <FaBabyCarriage className="h-5 w-5" />
                <Typography
                  color="blue-gray"
                  className="mr-auto ml-3 font-semibold"
                >
                  Generations
                </Typography>
              </ListItem>
              <div className="ml-3">
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/generations/baby_boomers"}
                  >
                    {" "}
                    Baby Boomers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/generations/gen_x"}
                  >
                    Gen X
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/generations/millennials"}
                  >
                    Millennials
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/generations/gen_z"}
                  >
                    Gen Z
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    onClick={() => setToggleSidebar(false)}
                    href={"/generations/gen_alpha"}
                  >
                    Gen Alpha
                  </Link>
                </ListItem>
              </div>
            </List>
          </div>
        </Card>
      </Drawer>
    </React.Fragment>
  );
}
