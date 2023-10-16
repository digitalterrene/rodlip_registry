"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import no_data from "@/assets/no_data.jpg";
import banner from "@/assets/pages/registries/one.jpg";
import Link from "next/link";
import Loader from "@/components/native/Loader";
export default function Root() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(users.length);
  const page = 20;

  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/search_entities/${"email"}`,
      {
        method: "POST",
        body: JSON.stringify({ key_value: "" }),
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
      setUsers(json);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [skip]);
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

          {loading ? (
            <div className="flex justify-center  w-full my-56">
              {" "}
              <Loader size={75} />
            </div>
          ) : (
            <div className="flex flex-wrap   py-6">
              <>
                {users && users.length > 0 ? (
                  <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2">
                    {users &&
                      users.map((r, i) => (
                        <Card className=" h-[480px] mr-2 my-2">
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
                                {r && r.access_key
                                  ? r.access_key
                                  : "Access Key"}
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
                                r && r.registry
                                  ? `/registries/${r.registry}/${r._id}`
                                  : `/registries/rodlip_registry/${r._id}`
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
    </div>
  );
}
