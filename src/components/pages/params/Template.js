"use client";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import no_data from "@/assets/no_data.jpg";
import { MdClear } from "react-icons/md";
import Link from "next/link";
import Loader from "@/components/native/Loader";
import FilterSidePanel from "@/components/native/FilterSidepanel";

const filters = [
  {
    name: "Country",
    filters: ["United States", "Canada", "United Kingsdom", "South Africa"],
  },
  {
    name: "Age",
    filters: ["1+", "13+", "26+", "34+", "48+", "60+"],
  },
  {
    name: "Date Created",
    filters: ["Newer", "Older"],
  },
];

export default function Template({ heading, subheading, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = 20;

  useEffect(() => {
    // Filter the data based on the applied filters
    if (appliedFilters.length > 0) {
      const filtered =
        data &&
        data.filter((data_) => {
          for (let i = 0; i < appliedFilters.length; i++) {
            const filter = appliedFilters[i];
            for (const key in data_) {
              if (
                typeof data_[key] === "string" &&
                data_[key] &&
                data_[key]?.includes(filter)
              ) {
                return true; // include the data_ if the value is a string and includes the filter
              }
            }
          }
          return false; // otherwise exclude the data_
        });
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset to original data when no filters applied
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [appliedFilters]);

  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="  ">
      {heading && subheading && (
        <div className="bg-[#354649]  border-t border-white  p-6 lg:px-10   text-white flex flex-col justify-center">
          <Typography className="uppercase font-bold lg:text-xl text-lg">
            {subheading?.replaceAll("_", " ")}
          </Typography>
          <Typography className="text-xs lg:text-lg">{heading}</Typography>
        </div>
      )}
      <div className="flex flex-wrap  w-full py-6">
        {loading ? (
          <div className="flex justify-center  w-full my-56">
            {" "}
            <Loader size={75} />
          </div>
        ) : (
          <div className="flex   w-full  py-6">
            <div className="w-full  ">
              <div className="lg:flex p-6 space-y-2 items-center   justify-between">
                <div className="  items-center flex gap-4">
                  <p className=" font-medium capitalize text-center">
                    Applied Filters
                  </p>
                  <button
                    type="button"
                    className="p-1 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://cdn-icons-png.flaticon.com/128/11936/11936450.png"
                    />
                  </button>
                </div>
                <div className="w-2/3 flex gap-3 items-center px-3  h-10  bg-gray-200  ">
                  {appliedFilters &&
                    appliedFilters.length > 0 &&
                    appliedFilters.map((f, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          setAppliedFilters((prevState) => {
                            const newFilters = prevState.filter(
                              (remove_f, i) => {
                                if (remove_f != f) {
                                  return f;
                                }
                              }
                            );
                            return newFilters;
                          })
                        }
                        class="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500   hover:bg-gray-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
                      >
                        {f}
                        <MdClear className="hover:text-red-900 text-xl" />
                      </button>
                    ))}
                </div>
                <p className="text-gray-500 text-sm font-medium   lg:text-end">
                  {filteredData?.length} users found
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 justify-between p-6 ">
                {filters &&
                  filters.map((f, i) => (
                    <div className="hs-dropdown mb-2 lg:mb-0 relative inline-flex">
                      <button
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex  w-40 justify-between items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        {f.name}
                        <svg
                          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                        aria-labelledby="hs-dropdown-default"
                      >
                        {f &&
                          f.filters &&
                          f.filters.map((f, i) => (
                            <button
                              key={i}
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                              onClick={() =>
                                setAppliedFilters((prevState) => [
                                  ...prevState,
                                  f,
                                ])
                              }
                            >
                              {f}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
              {filteredData && filteredData.length > 0 ? (
                <div className="grid lg:grid-cols-4 gap-4">
                  {filteredData &&
                    filteredData.map((r, i) => (
                      <Card className="lg:w-72   h-[480px] mr-2 my-2">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="h-96"
                        >
                          <img
                            src={r && r.image ? r.image : no_data.src}
                            className="w-full h-full object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <div className="flex items-center justify-between mb-2">
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
                              {r && r.username ? r.username : "Username"}
                            </Typography>
                          </div>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal line-clamp-3 opacity-75"
                          >
                            {r && r.description
                              ? r.description
                              : "Welcome to RODLIP, an acronym for Rule Of Democratic Law Ideology Protocol. At RODLIP, we are dedicated to working towards a world that embodies the principles of godly socioeconomic and eco-political ideologies, creating a better replica of the heavenly kingdom. Our mission is to establish a platform where leaders can guide with the help of a sacred set of laws known as the Bible."}
                          </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                          <Link href={`/user/profile/${r._id}`}>
                            <Button
                              ripple={false}
                              fullWidth={true}
                              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                            >
                              View
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              ) : (
                <div className="flex justify-center rounded-2xl bg-white h-screen w-full py-56">
                  {" "}
                  <img
                    src={no_data.src}
                    className="w-56 h-56"
                    alt="no data to display"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
