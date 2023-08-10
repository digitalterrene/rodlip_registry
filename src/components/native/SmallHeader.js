"use client";
import { Button, Input, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

export default function SmallHeader() {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("help") &&
        !pathname.includes("sign") &&
        !pathname.includes("terms_and_conditions") && (
          <div className="flex justify-end w-full  p-3  items-center">
            <div className="mx-2">
              <Button
                size="sm"
                variant="text"
                className="flex   bg-blue-gray-50 text-black capitalize items-center p-3"
              >
                <Typography as="a" className="text-sm" href="/signup">
                  {" "}
                  Create New
                </Typography>
                <AiOutlinePlus className="ml-3 text-xl" />
              </Button>
            </div>
            <div className="mx-2">
              <Input label="Search" className=" p-3    " />
            </div>
            <div className="mx-2">
              <Button
                size="sm"
                variant="text"
                className="flex  bg-blue-gray-50 p-3 text-xl capitalize items-center "
              >
                <AiOutlineSearch />
              </Button>
            </div>
          </div>
        )}
    </>
  );
}
