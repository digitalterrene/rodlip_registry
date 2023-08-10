import React from "react";
import logo from "../../assets/components/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#f5f3ff]  py-4 px-3 mt-16">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <p className="text-xs  md:text-sm">
            Copyright 2023 &copy; All Rights Reserved
          </p>
        </div>
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
            <li>
              <a href="/help" className="   ">
                Contact
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className=" ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
