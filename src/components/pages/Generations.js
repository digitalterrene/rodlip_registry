"use client";
import {
  Button,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import no_data from "../../assets/no_data.jpg";
import Loader from "../Loader";
import Link from "next/link";
export default function Generations({ generation }) {
  let title = generation.replace("_", " ");
  const [generations, setContinents] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = 20;

  const handleSearch = async () => {
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/search_entities/${"generation"}`,
      {
        method: "POST",
        body: JSON.stringify({ key_value: generation }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (response.ok) {
      setContinents(json);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [generation]);
  return (
    <div className="p-1 lg:p-4">
      <div className="bg-[#934A5F] rounded-2xl  p-3 lg:px-10 lg:h-56 text-white flex flex-col justify-center">
        <Typography className="uppercase font-bold lg:text-2xl text-lg">
          {title}
        </Typography>
        <Typography className="text-xs lg:text-xl">Generations</Typography>
      </div>
      <div className="flex flex-wrap   py-6">
        {loading ? (
          <div className="flex justify-center  w-full my-56">
            {" "}
            <Loader size={75} />
          </div>
        ) : (
          <div className="flex flex-wrap w-full  py-6">
            <>
              {generations && generations.length > 0 ? (
                <div>
                  {generations &&
                    generations.map((r, i) => (
                      <Card className="w-72 h-[480px] mr-2 my-2">
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
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
                              {r && r.access_key ? r.access_key : "Access Key"}
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
                          <Link
                            href={
                              r && r.generation
                                ? `/generations/${r.generation}/${r._id}`
                                : `/generations/rodlip_registry/${r._id}`
                            }
                          >
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
            </>
          </div>
        )}
      </div>
    </div>
  );
}
