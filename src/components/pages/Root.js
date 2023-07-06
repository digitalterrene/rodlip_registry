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
import Loader from "../Loader";
import no_data from "../../assets/no_data.jpg";
import banner from "../../assets/pages/registries/one.jpg";
import Link from "next/link";
export default function Root() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(users.length);
  const [loading, setLoading] = useState(true);
  const page = 20;

  const fetchUsers = async () => {
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/type/users/${skip}/${page}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log("Participations", json);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (response.ok) {
      setUsers(json);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="p-16">
      <div className="bg-[#353E4F] rounded-2xl py-20">
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
            <div className="md:w-1/2">
              <img
                src={banner.src}
                alt="Coffee beans"
                className="w-full -mb-36 drop-shadow-2xl h-[420px] object-cover rounded-lg shadow-lg"
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
              {users.map((user, i) => (
                <Card className="w-72 h-[480px] mr-2 my-2">
                  <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                      src={user && user.image ? user.image : no_data.src}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <div className="flex items-center justify-between mb-2">
                      <Typography color="blue-gray" className="font-medium">
                        {user && user.name ? user.name : "No Name"}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        {user && user.age ? user.age : "No Age"}
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal line-clamp-3 opacity-75"
                    >
                      {user && user.description
                        ? user.description
                        : "Welcome to RODLIP, an acronym for Rule Of Democratic Law Ideology Protocol. At RODLIP, we are dedicated to working towards a world that embodies the principles of godly socioeconomic and eco-political ideologies, creating a better replica of the heavenly kingdom. Our mission is to establish a platform where leaders can guide with the help of a sacred set of laws known as the Bible."}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >
                      <Typography
                        as="a"
                        href={
                          user ? `/registries/rodlip_registry/${user._id}` : "#"
                        }
                      >
                        View Profile
                      </Typography>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
