"use client";
import { Avatar, Button, Tooltip, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsShieldExclamation } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { IoFingerPrintSharp } from "react-icons/io5";

export default function Sidebarr({ tabs, logo, avatar }) {
  const [active_tab, setActiveTab] = useState("one");
  const [mini_heading, setMiniHeading] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="sticky  py- 2 bg-[#f5f3ff] shadow-md  bottom-0  top-0 h-screen">
        <div
          className={`${
            !mini_heading ? "w-56" : "w-20"
          } flex flex-col  overflow-y-auto h-full justify-between   p-4 pt-2  min-h-screen rounded-2xl`}
        >
          <div className="w-full">
            <div className="ml-auto  flex items-center w-fit">
              {!mini_heading ? (
                <BsArrowRight
                  className="text-black cursor-pointer text-xl"
                  onClick={() => setMiniHeading(!mini_heading)}
                />
              ) : (
                <BsArrowLeft
                  className="text-black cursor-pointer  text-xl"
                  onClick={() => setMiniHeading(!mini_heading)}
                />
              )}
              <div className="h-4 w-[1px] ml-2 bg-black" />
            </div>
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
            <div className="flex gap-2 mt-8 flex-col">
              {!mini_heading && (
                <div className="flex items-center">
                  <IoFingerPrintSharp className="text-xl mr-2" />
                  <Typography className="text-gray-500">Registries</Typography>
                </div>
              )}

              {tabs &&
                tabs.slice(0, 5).map(({ icon, route, link }, i) => (
                  <Button
                    onClick={() => {
                      setActiveTab(route);
                      router.push(`/registries/${link}`);
                    }}
                    className={`flex w-full  shadow-none p-2 hover:bg-white py-1 items-center bg-${
                      active_tab === route ? "black" : "transparent"
                    } border-${active_tab === route && "2"}`}
                  >
                    <Tooltip content={`${route}`} placement="right">
                      <img
                        className={`w-${
                          mini_heading ? "20" : "10"
                        } p-1 rounded-lg bg-${
                          active_tab === route ? "white" : ""
                        }`}
                        src={icon}
                      />
                    </Tooltip>

                    {!mini_heading && (
                      <Typography
                        className={`capitalize   transition-all text-start w-32 ml-3 p-1 rounded-lg text-${
                          active_tab === route ? "white" : "black"
                        }`}
                      >
                        {route}
                      </Typography>
                    )}
                  </Button>
                ))}
              {!mini_heading && (
                <div className="flex  mt-6 border-t pt-6 items-center">
                  <HiOutlineLocationMarker className="text-xl mr-2" />
                  <Typography className="text-gray-500">Continents</Typography>
                </div>
              )}

              {tabs &&
                tabs.slice(5, 12).map(({ icon, route, link }, i) => (
                  <Button
                    onClick={() => {
                      setActiveTab(route);
                      router.push(`/continents/${link}`);
                    }}
                    className={`flex w-full  shadow-none p-2 hover:bg-white py-1 items-center bg-${
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
                        className={`capitalize   transition-all text-start w-32 ml-3 p-1 rounded-lg text-${
                          active_tab === route ? "white" : "black"
                        }`}
                      >
                        {route}
                      </Typography>
                    )}
                  </Button>
                ))}
              {!mini_heading && (
                <div className="flex mt-6 border-t pt-6 items-center">
                  <BiTime className="text-xl mr-2" />
                  <Typography className="text-gray-500">Generations</Typography>
                </div>
              )}
              {tabs &&
                tabs.slice(12, 17).map(({ icon, route, link }, i) => (
                  <Button
                    onClick={() => {
                      setActiveTab(route);
                      router.push(`/generations/${link}`);
                    }}
                    className={`flex w-full  shadow-none p-2 hover:bg-white py-1 items-center bg-${
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
                        className={`capitalize   transition-all text-start w-32 ml-3 p-1 rounded-lg text-${
                          active_tab === route ? "white" : "black"
                        }`}
                      >
                        {route}
                      </Typography>
                    )}
                  </Button>
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
                <Button
                  className="capitalize text-black w-full text-start my-1"
                  variant="text"
                >
                  <Typography as="a" href="/help">
                    Contact Us
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
