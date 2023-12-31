"use client";
import { dashboard_routes } from "@/assets/data_keys";
import { useGlobalContext } from "@/context/GlobalContext";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { BsShieldExclamation } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function Sidebarr({ logo }) {
  const [active_tab, setActiveTab] = useState("one");
  const { mini_heading } = useGlobalContext();
  const router = useRouter();

  return (
    <>
      <div className="sticky  text-black py- 2 bg-[#f5f3ff] shadow-md  bottom-0  top-0 h-screen">
        <div
          className={`${
            !mini_heading ? "w-60" : "w-20"
          } flex flex-col  overflow-y-auto h-full justify-between px-3  py-4 pt-2  min-h-screen rounded-2xl`}
        >
          <div className="w-full">
            <div
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center"
            >
              <Tooltip
                className=" "
                content={"Rodlip Registry"}
                placement="right"
              >
                <img
                  className={`${!mini_heading ? "w-12" : "w-20"}`}
                  src={logo.src}
                />
              </Tooltip>
              {!mini_heading && (
                <Typography variant="h5" className=" ml-2">
                  Registry
                </Typography>
              )}
            </div>
            <div className="flex gap-2    flex-col">
              {!mini_heading && (
                <div className="flex  mt-6 border-t  pt-6 items-center">
                  <HiOutlineLocationMarker className="text-xl mr-2" />
                  <Typography className="text-gray-500">
                    Job Categories
                  </Typography>
                </div>
              )}

              {dashboard_routes &&
                dashboard_routes.slice(0, 8).map(({ icon, route }, i) => (
                  <a key={i} href={`/job-categories/${route}`}>
                    <Button
                      onClick={() => {
                        setActiveTab(route);
                      }}
                      className={`flex w-full   rounded-none hover:shadow-none drop-shadow-none shadow-none p-2 hover:bg-white py-1 items-center bg-${
                        active_tab === route ? "black" : "transparent"
                      } text-${active_tab === route ? "white" : ""} border-${
                        active_tab === route && "2"
                      }`}
                    >
                      <Tooltip content={`${route}`} placement="right">
                        <img
                          className={`w-10 p-1 rounded-lg bg-${
                            active_tab === route ? "white" : ""
                          }`}
                          src={icon}
                        />
                      </Tooltip>

                      {!mini_heading && (
                        <Typography
                          className={`capitalize text-${
                            active_tab === route ? "white" : ""
                          } shodow-none drop-shadow-none  transition-all text-start w-32 ml-3 p-1 rounded-lg  hover:text-black`}
                        >
                          {route}
                        </Typography>
                      )}
                    </Button>
                  </a>
                ))}
              {!mini_heading && (
                <div className="flex mt-6 border-t pt-6 items-center">
                  <BiTime className="text-xl mr-2" />
                  <Typography className="text-gray-500">Generations</Typography>
                </div>
              )}

              {dashboard_routes &&
                dashboard_routes.slice(8, 13).map(({ icon, route }, i) => (
                  <a key={i} href={`/generations/${route}`}>
                    <Button
                      onClick={() => {
                        setActiveTab(route);
                      }}
                      className={`flex w-full   rounded-none hover:shadow-none drop-shadow-none shadow-none p-2 hover:bg-white py-1 items-center bg-${
                        active_tab === route ? "black" : "transparent"
                      } border-${active_tab === route && "2"}`}
                    >
                      <Tooltip content={`${route}`} placement="right">
                        <img
                          className={`w-10 p-1 rounded-lg bg-${
                            active_tab === route ? "white" : ""
                          }`}
                          src={icon}
                        />
                      </Tooltip>

                      {!mini_heading && (
                        <Typography
                          className={`capitalize  text-black shodow-none drop-shadow-none  transition-all text-start w-32 ml-3 p-1 rounded-lg  hover:text-black`}
                        >
                          {route}
                        </Typography>
                      )}
                    </Button>
                  </a>
                ))}
              {!mini_heading && (
                <div className="flex mt-6 border-t pt-6 items-center">
                  <IoColorPaletteOutline className="text-xl mr-2" />
                  <Typography className="text-gray-500">Race</Typography>
                </div>
              )}
              {dashboard_routes &&
                dashboard_routes.slice(13).map(({ icon, route }, i) => (
                  <a key={i} href={`/race/${route}`}>
                    <Button
                      onClick={() => {
                        setActiveTab(route);
                      }}
                      className={`flex w-full   rounded-none hover:shadow-none drop-shadow-none shadow-none p-2 hover:bg-white py-1 items-center bg-${
                        active_tab === route ? "black" : "transparent"
                      } border-${active_tab === route && "2"}`}
                    >
                      <Tooltip content={`${route}`} placement="right">
                        <img
                          className={`w-10 p-1 rounded-lg bg-${
                            active_tab === route ? "white" : ""
                          }`}
                          src={icon}
                        />
                      </Tooltip>

                      {!mini_heading && (
                        <Typography
                          className={`capitalize  text-black shodow-none drop-shadow-none  transition-all text-start w-32 ml-3 p-1 rounded-lg  hover:text-black`}
                        >
                          {route}
                        </Typography>
                      )}
                    </Button>
                  </a>
                ))}
            </div>
            {!mini_heading && (
              <>
                {!mini_heading && (
                  <div className="flex  mt-6 border-t pt-6 items-center">
                    <BsShieldExclamation className="text-xl mr-2" />
                    <Typography className="text-gray-500">
                      Important Resources
                    </Typography>
                  </div>
                )}
                <Button
                  className="capitalize text-black w-full text-start my-1"
                  variant="text"
                >
                  <Typography as="a" href="https://rodlip.org">
                    Our Website
                  </Typography>
                </Button>
                <Button
                  className="capitalize text-black w-full text-start my-1"
                  variant="text"
                >
                  <Typography as="a" href="/terms_and_conditions">
                    Terms & Conditions
                  </Typography>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
