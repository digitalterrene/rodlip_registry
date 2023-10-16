"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/components/logo.png";
import { IoFingerPrint } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
export default function MT_Sidebar() {
  const { toggleSidebar, setToggleSidebar } = useGlobalContext();

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
