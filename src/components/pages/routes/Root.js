"use client";
import React, { useState } from "react";
import banner from "@/assets/pages/registries/one.jpg";
import Link from "next/link";
import Template from "../params/Template";
export default function Root({ users }) {
  return (
    <div className="lg:p-16">
      <div className="bg-[#353E4F] lg:h-auto h-fit rounded-2xl py-4 lg:py-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-bold text-5xl leading-tight mb-6">
                Driven by the dream
              </h1>
              <p className="text-white text-xl mb-8">
                to establish sustainable ecopolitical systems
              </p>
              <Link
                href="/signup"
                className="px-6 py-3 bg-white text-[#353E4F] font-bold rounded-xl hover:bg-[#353E4F] hover:text-white transition duration-200"
              >
                Get involved
              </Link>
            </div>
            <div className="md:w-1/2 hidden lg:block">
              <img
                src={banner.src}
                alt="Rodlip banner"
                className="w-full -mb-36 drop-shadow-2xl h-64 lg:h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Accounts
          </h2>

          <Template data={users} />
        </div>
      </div>
    </div>
  );
}
