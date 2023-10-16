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
  Alert,
  Avatar,
  Button,
  Input,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tabs,
  Select,
  Option,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { IoInformation } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import Edit from "./Edit";
import Profile from "./Profile";
import { useAuthContext } from "@/context/AuthContext";

export default function Dashboard({ id }) {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [user_data, setUserData] = useState({});
  const { user } = useAuthContext();
  const [tab, setTab] = useState("view");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://server.entities.vertueal.com/entities/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setUserData(json);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="  w-full justify-between">
      {/* Information Views */}
      <div className="w-full h-screen py-3 overflow-y-auto">
        <div className="bg-transparent  p-3 flex items-center">
          <Button
            onClick={() => setTab("view")}
            className={`w-40 mx-1 text-lg text-black capitalize p-2 font-bold rounded-2xl  bg-${
              tab === "view" ? "blue-gray-100" : ""
            }`}
            variant="text"
          >
            View
          </Button>

          {user && (
            <>
              {(user._id === id || user._id === user_data.user_id) && (
                <Button
                  onClick={() => setTab("edit")}
                  className={`w-40 mx-1 text-lg text-black capitalize p-2 font-bold rounded-2xl  bg-${
                    tab === "edit" ? "blue-gray-100" : ""
                  }`}
                  variant="text"
                >
                  Edit
                </Button>
              )}
            </>
          )}
        </div>
        <div>
          {user &&
            (tab === "view" ? (
              <Profile user_data={user_data} />
            ) : (
              <>
                {(user._id === id || user._id === user_data.user_id) && (
                  <Edit user_data={user_data} />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
