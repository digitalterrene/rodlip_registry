"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import no_data from "../../assets/no_data.jpg";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaIdCard, FaLock, FaUserAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
export default function ProfileEdit({ id }) {
  const [user, setUser] = useState({});
  const { dispatch, user: registry_user } = useAuthContext();
  const [registry, setRegistry] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [access_key, setAccessKey] = useState("");
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [generation, setGeneration] = useState("");
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (registry_user && user && registry_user._id != user._id) {
      const toast_ = toast.loading("Checking authenticity..");

      setTimeout(() => {
        toast.error("Access denied. Redirecting...", {
          id: toast_,
          className: "capitalize",
        });
        router.push("/");
      }, 2000);
    }
  });
  const fetchUser = async () => {
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/${id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      setUser(json);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const selectCountry = (val) => {
    setCountry(val);
  };
  const selectRegion = (val) => {
    setRegion(val);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toast_update = toast.loading("Loading..");
    let data = {};
    if (
      name ||
      surname ||
      password ||
      access_key ||
      country ||
      region ||
      email ||
      description ||
      registry ||
      generation ||
      continent
    ) {
      if (email) {
        data = { ...data, email };
      }
      if (name) {
        data = { ...data, name };
      }
      if (surname) {
        data = { ...data, surname };
      }
      if (password) {
        data = { ...data, password };
      }
      if (access_key) {
        data = { ...data, access_key };
      }
      if (country) {
        data = { ...data, country };
      }
      if (registry) {
        data = { ...data, registry };
      }
      if (region) {
        data = { ...data, region };
      }
      if (email) {
        data = { ...data, email };
      }
      if (generation) {
        data = { ...data, generation };
      }
      if (continent) {
        data = { ...data, continent };
      }
      if (description) {
        data = { ...data, description };
      }

      const response = await fetch(
        `https://server.entities.vertueal.com/entities/${user._id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        toast.error(`${json.error} `, {
          id: toast_update,
          className: "capitalize",
        });
      }
      if (response.ok) {
        toast.success("Successfully updated entity profile", {
          id: toast_update,
          className: "capitalize",
        });
        router.push(`/registries/rodlip_registry/${json._id}`);
        setUser(json);
        //save the userData to local storage
        localStorage.setItem("rodlip_user", JSON.stringify(json));
        //update the authcontext
        dispatch({ type: "LOGIN", payload: json });
      }
    } else {
      toast.error("Please fill in at least one field", {
        id: toast_update,
      });
    }
  };
  return (
    <div className="mx-auto p-16">
      <div className="bg-[#685F58] rounded-t-2xl p-3 px-10 h-56 text-white flex flex-col justify-center">
        <Typography variant="h3" className="uppercase">
          Edit
        </Typography>
        <Typography variant="lead">Profile</Typography>
      </div>
      <div className="grid grid-cols-1 p-2 md:grid-cols-12 rounded-b-2xl border">
        <div className="bg-[#0C4A60] mt-10  h-fit md:col-span-4 p-2 rounded-2xl text-white">
          <Card
            shadow={false}
            className="relative grid h-96 w-full max-w-full items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              style={{
                backgroundImage: `url(${
                  user && user.banner ? user.banner : no_data.src
                }})`,
              }}
              className="absolute  inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography variant="h5" className="mb-4 text-gray-400">
                {user && user.username ? user.username : "Username"}
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt={user && user.username ? user.username : "username"}
                src={user && user.image ? user.image : no_data.src}
                className="border-2 border-white"
              />
            </CardBody>
          </Card>
          <div className=" ">
            <div className="flex items-center m-5">
              <FaUserAlt />
              <Tooltip content="Full Name">
                <span className="text-sm ml-2">
                  {user && user.name ? user.name : "Name"}
                  {user && user.surname ? user.surname : "Surname"}
                </span>
              </Tooltip>
            </div>
            <div className="flex items-center m-5">
              <FaIdCard />
              <Tooltip content="SSN">
                <span className="text-sm ml-2">
                  {user && user.surname ? user.surname : "SSN Number"}
                </span>
              </Tooltip>
            </div>
            <div className="flex items-center m-5">
              <FaLock />{" "}
              <Tooltip content="Access Key">
                <span className="text-sm ml-2">
                  {user && user.access_key ? user.access_key : "Access Key"}
                </span>
              </Tooltip>
            </div>
            <div className="flex items-center m-5">
              <BsFillShieldLockFill />
              <Tooltip content="Identification Number">
                <span className="text-sm ml-2">
                  {user ? user._id : "Identification Number"}
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={user && user.name ? user.name : "Name"}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder={user && user.surname ? user.surname : "Surname"}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Access Key
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={access_key}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder={
                  user && user.access_key ? user.access_key : "Access Key"
                }
              />
            </div>
            <div className="w-full md:w-1/2 my-3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Country
              </label>
              <CountryDropdown
                value={country}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(val) => selectCountry(val)}
              />
            </div>
            <div className="w-full md:w-1/2 my-3  px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Region
              </label>
              <RegionDropdown
                country={country}
                value={region}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(val) => selectRegion(val)}
              />
            </div>
            <div className="w-full md:w-1/2 my-3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Registry
              </label>
              <select
                value={registry}
                onChange={(e) => setRegistry(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="registry"
                id="registry"
              >
                <option value="none" selected className="uppercase">
                  {user && user.registry
                    ? user.registry.replaceAll("_", " ")
                    : "Choose registry"}
                </option>
                <option value="federal_ecopolitical_noble_assembly_committe">
                  FENAC
                </option>
                <option value="employment_consumption_equating_agency">
                  ECEA
                </option>
                <option value="morality_enforcement_and_retaintion_body">
                  MEARB
                </option>
              </select>
            </div>
            <div className="w-full md:w-1/2 my-3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Continent
              </label>
              <select
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="continent"
                id="continent"
              >
                <option value="none" selected className="capitalize">
                  {user && user.continent
                    ? user.continent.replaceAll("_", " ")
                    : "Choose continent"}
                </option>
                <option value="north_america">North America</option>
                <option value="south_america">South America</option>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="australia">Austarlia</option>
                <option value="asia">Asia</option>
                <option value="antarctica">Antarctica</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 my-3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Generation
              </label>
              <select
                value={generation}
                onChange={(e) => setGeneration(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="generation"
                id="generation"
              >
                <option value="none" selected className="capitalize">
                  {user && user.generation
                    ? user.generation.replaceAll("_", " ")
                    : "Choose generation"}
                </option>
                <option value="babby_boomers">Babby Boomers</option>
                <option value="gen_x">Gen X</option>
                <option value="millenneals">Millennenial</option>
                <option value="gen_z">Gen Z</option>
                <option value="gen_alpha">Gen Alpha</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  user && user.email ? user.email : "example@domain.com"
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap  -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Bio
              </label>
              <textarea
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={
                  user && user.description ? user.description : "Access Key"
                }
                className=" h-44 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center"></div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
