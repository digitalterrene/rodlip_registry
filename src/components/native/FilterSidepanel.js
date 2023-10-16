"use client";
import { Checkbox, Slider } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { value: "16+", label: "16+" },
  { value: "20+", label: "20+" },
  { value: "26+", label: "26+" },
  { value: "38+", label: "38+" },
  { value: "50+", label: "50+" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "#ef4444" : base.borderColor,
    backgroundColor: "#fee2e2",
    boxShadow: state.isFocused ? "0 0 0 2px red" : base.boxShadow,
    "&:hover": {
      borderColor: "transparent", // Remove the blue border on hover
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none", // Hide the dropdown icon
  }),
};
const customStylesWithScroll = {
  ...customStyles,
  menu: (base) => ({
    ...base,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "8px",
    maxWidth: "none",
    width: "auto",
    "&::-webkit-scrollbar": {
      width: "0",
    },
  }),
  option: (base, state) => ({
    ...base,
    paddingLeft: "4px",
    paddingRight: "4px",
    fontSize: "16px",
  }),
};
const DropdownIndicator = () => null;
export default function FilterSidePanel() {
  const [priceRange, setPriceRange] = useState(50);
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="w-72 p-6  space-y-6">
      {/* profession div starts here */}
      <div className="w-full bg-gray-50 border-gay-800 h-80  border   p-8 ">
        <p className="font-bold text-gray-500  mb-3 text-lg">Professions</p>
        <a
          className="flex items-center font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          Developer
        </a>
        <a
          className="flex items-center font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          Legal
        </a>
        <a
          className="flex items-center justify-between font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          Scholar
          <span className="text-gray-400">45</span>
        </a>
        <a
          className="flex items-center justify-between font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          Unemployed
          <span className="text-gray-400">45</span>
        </a>
        <a
          className="flex items-center justify-between font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          Designer
          <span className="text-gray-400">145</span>
        </a>
        <button
          type="button"
          className="py-3 px-4 mt-4 w-full text-start px-4 inline-flex justify-between -ml-3 items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          See All
          <svg
            className="w-2.5 h-auto"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      {/* profession div ends here */}
      {/* race div starts here */}
      <div className="w-full bg-blue-100 h-44   border     p-8 ">
        <p className="font-bold text-black mb-3 text-lg">Race</p>
        <div className="grid grid-cols-4 gap-5 mr-8">
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-black text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                African
              </span>
            </button>
          </div>
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-white text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                Caucasian
              </span>
            </button>
          </div>
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                pink
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-[#C3ABA8] text-white hover:bg-[#C3ABA8] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                South Asian
              </span>
            </button>
          </div>
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-orange-500 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                Austronesian
              </span>
            </button>
          </div>
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                East Asian
              </span>
            </button>
          </div>
          <div class="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle   inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-red-500  text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
              ></button>
              <span
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                Indigenous American
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* race div ends here */}
      {/* age range div starts here */}
      <div className="w-full bg-white h-36 shadow-2xl border rounded-xl   p-8 ">
        <div className="w-full flex justify-between">
          <p className="font-bold text-gray-500  mb-3 text-lg">Age</p>
          <Select
            options={options}
            styles={customStylesWithScroll}
            components={{ DropdownIndicator }}
            isSearchable={false}
            defaultValue={options[0]}
          />
        </div>
      </div>
      {/* age range div ends here */}
      {/* location div starts here */}
      <div className="w-full bg-white space-y-2 shadow-2xl border rounded-xl   p-8 ">
        <p className="font-bold text-gray-500  mb-3 text-lg">Location</p>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="United States" defaultChecked />
        </div>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="Europe" defaultChecked />
        </div>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="South Africa" defaultChecked />
        </div>{" "}
      </div>
      {/* location div ends here */}
    </div>
  );
}
