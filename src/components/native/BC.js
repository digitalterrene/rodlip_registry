import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook, BsGlobeAmericas } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
export default function BC() {
  const pathname = usePathname();
  const [icon, setIcon] = useState(<AiOutlineUser className="text-xl " />);

  useEffect(() => {
    if (pathname.includes("registries")) {
      setIcon(<AiOutlineUser />);
    }
    if (pathname.includes("continents")) {
      setIcon(<BsGlobeAmericas className="text-xl " />);
    }
    if (pathname.includes("generations")) {
      setIcon(<BiTime className="text-xl " />);
    }
    if (pathname.includes("terms_and_conditions")) {
      setIcon(<BsBook className="text-xl " />);
    }
  }, [pathname]);
  return (
    <div>
      {" "}
      <nav>
        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li className="leading-normal text-sm">{icon}</li>
          <li
            className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
            aria-current="page"
          >
            {pathname.split("/")[1]}
          </li>
        </ol>
      </nav>
    </div>
  );
}
