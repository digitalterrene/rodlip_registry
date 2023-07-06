"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";

import no_data from "../../assets/no_data.jpg";
import { IoHeartCircleOutline, IoShareOutline } from "react-icons/io5";
import { useAuthContext } from "@/context/AuthContext";
export default function ProfileView({ id }) {
  const [user, setUser] = useState({});
  const { user: registry_user } = useAuthContext();
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  const fetchUser = async () => {
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/${id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      setUser(json);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="p-16 h-full">
      {" "}
      <div className="bg-[#685F58] rounded-t-2xl  p-3 px-10 h-56 text-white flex flex-col justify-center">
        <Typography variant="h3" className="uppercase">
          View
        </Typography>
        <Typography variant="lead">Profile</Typography>
      </div>
      <div className=" ">
        <div className="container mx-auto border rounded-b-2xl py-4">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                {registry_user && user && registry_user._id === user._id && (
                  <Link
                    href={
                      user
                        ? `/registries/rodlip_registry/edit/${user._id}`
                        : "#"
                    }
                    className="relative text-xl   top-2 right-2"
                  >
                    <BiEdit />
                  </Link>
                )}
                <div className="flex flex-col items-center">
                  <img
                    onClick={handleOpen}
                    src={user && user.image ? user.image : no_data.src}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">
                    {user && user.username ? user.username : "Username"}
                  </h1>
                  <p className="text-gray-600">
                    {user && user.position ? user.position : "Position"}
                  </p>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                    Superstatals
                  </span>
                  <ul>
                    <li className="mb-2">Vertueal</li>
                    <li className="mb-2">Liquid Bill</li>
                    <li className="mb-2">Picconne</li>
                    <li className="mb-2">Perrenial Legacy</li>
                    <li className="mb-2">Datalinc</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white h-[800px]  shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">
                  {user && user.description
                    ? user.description
                    : "Welcome to RODLIP, an acronym for Rule Of Democratic Law Ideology Protocol. At RODLIP, we are dedicated to working towards a world that embodies the principles of godly socioeconomic and eco-political ideologies, creating a better replica of the heavenly kingdom. Our mission is to establish a platform where leaders can guide with the help of a sacred set of laws known as the Bible."}
                </p>

                <h2 className="text-xl font-bold mt-6 mb-4">Engagements</h2>
                {/* <div className="mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Vertueal</span>
                    <p>
                      <span className="text-gray-600">2Mar 2023</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div> */}
                {/* <div className="mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Liquid Bill</span>
                    <p>
                      <span className="text-gray-600">2Mar 2023</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        className="overflow-y-auto h-full"
        size="xl"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt={user && user.username ? user.username : "username"}
              src={user && user.image ? user.image : no_data}
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                {user && user.username ? user.username : "Username"}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                {user && user.email ? user.email : "example@gmail.com"}
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={user && user.image ? user.image : no_data}
          />
        </DialogBody>
      </Dialog>
    </div>
  );
}
