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
  function containsNumbers(str) {
    return str.match(/\d/) !== null;
  }
  // Split the pathname by '/'
  const parts = pathname
    ? pathname.split("/").filter((part) => !containsNumbers(part))
    : [];

  // Create breadcrumb elements from the pathname parts
  const breadcrumb = parts.map((part, index) => (
    <React.Fragment key={index}>
      <li
        className={`text-sm${
          index === parts.length - 1
            ? " font-semibold text-black truncate dark:text-gray-200"
            : ""
        }`}
      >
        <a
          className={`flex items-center ${
            index === parts.length - 1 ? "text-black" : "text-gray-500"
          } hover-text-blue-600`}
          href={`/${part.replaceAll(" ", "-")}`}
        >
          {part.replaceAll("_", " ")}
        </a>
      </li>
      {index !== parts.length - 1 && (
        <li>
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </li>
      )}
    </React.Fragment>
  ));
  return (
    <div>
      {" "}
      <nav>
        {/* <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
          <li className="leading-normal text-sm">{icon}</li>
          <li
            className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
            aria-current="page"
          >
            {pathname.split("/")[1]}
          </li>
        </ol> */}
        <ol
          className="flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="text-sm">
            <a
              className="flex gap-2 items-center text-gray-500 hover-text-blue-600"
              href="/"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/9581/9581163.png"
                className="w-4"
              />
              Registry
            </a>
          </li>
          {breadcrumb}
        </ol>
      </nav>
    </div>
  );
}
