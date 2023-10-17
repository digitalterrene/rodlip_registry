"use client";
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  Card,
  CardBody,
  CardHeader,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { IoLocationOutline } from "react-icons/io5";
import { MdFacebook, MdLocationSearching } from "react-icons/md";
import {
  BsGlobeAmericas,
  BsInstagram,
  BsPinMap,
  BsThreeDots,
} from "react-icons/bs";
import {
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { rodlip_server } from "@/urls/rodlip_urls";
import { dashboard_routes } from "@/assets/data_keys";
import { useAuthContext } from "@/context/AuthContext";

export default function ManageUser({ user, error }) {
  const [inputs, setInputs] = useState({});
  const { user: logged_user } = useAuthContext();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const countries = Country.getAllCountries();
  const regions = State.getStatesOfCountry(countryCode);
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const cities = City.getCitiesOfState(countryCode, stateCode);

  useEffect(() => {
    import("preline");
  }, []);
  const postBanner = (pics) => {
    const toastId = toast.loading("Uploading image...");
    if (pics === undefined) {
      toast.error("Image is required", {
        id: toastId,
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dq4ceizj6");
      fetch("https://api.cloudinary.com/v1_1/dq4ceizj6/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then(async (data) => {
          setBanner(data.url.toString());
          toast.success("Image uploaded successfully", {
            id: toastId,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err}`, {
            id: toastId,
          });
        });
    } else {
      toast.error(`${err}`, {
        id: toastId,
      });
      return;
    }
  };
  const postImage = (pics) => {
    const toastId = toast.loading("Uploading image...");
    if (pics === undefined) {
      toast.error("Image is required", {
        id: toastId,
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dq4ceizj6");
      fetch("https://api.cloudinary.com/v1_1/dq4ceizj6/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then(async (data) => {
          setImage(data.url.toString());
          toast.success("Image uploaded successfully", {
            id: toastId,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err}`, {
            id: toastId,
          });
        });
    } else {
      toast.error(`${err}`, {
        id: toastId,
      });
      return;
    }
  };
  const handleSubmit = async () => {
    const toastId = toast.loading("Updating user information");
    const token = localStorage.getItem("rodlip_user")
      ? JSON.parse(localStorage.getItem("rodlip_user")).token
      : null;
    const response = await fetch(`${rodlip_server}/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...inputs,
        country: country,
        state: region,
        city: city,
        image: image,
        banner: banner,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      toast.error(`${json.error}`, {
        id: toastId,
      });
    }
    if (response.ok) {
      toast.success("User updated successfully", {
        id: toastId,
      });
      setTimeout(() => {
        location.reload();
      }, 4000);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <Toaster />
      <div className="   mb-6 -mt-4  z-[999] w-full flex justify-center"></div>
      <div className="w-full  flex gap-4 justify-end p-3">
        {user && logged_user && user._id === logged_user._id && (
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="py-1.5 px-4   inline-flex justify-center items-center gap-2 rounded border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            Update
          </button>
        )}
      </div>
      <div className=" dark:bg-gray-800 dark:text-gray-50">
        <form className="container flex flex-col mx-auto space-y-12">
          <fieldset className="lg:flex w-full  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 lg:w-1/3 col-span-full lg:col-span-1">
              <Typography variant="h5">Basic</Typography>
              <div className="w-full">
                {" "}
                <Card className="border-none rounded space-y-16 shadow-none drop-shadow-none p-0 w-full">
                  <CardHeader
                    floated={false}
                    className="h-40 rounded-none shadow-none m-0 p-0"
                  >
                    <img
                      src={
                        user && user.banner
                          ? user.banner
                          : "https://img.freepik.com/free-vector/abstract-white-shapes-background_79603-1362.jpg?size=626&ext=jpg&ga=GA1.1.1195892238.1697052013&semt=sph"
                      }
                      className="w-full h-full object-cover rounded object-center"
                      alt="user banner"
                    />
                    <button
                      type="button"
                      className=" w-16 h-16   border-none  absolute -right-6 -top-3 text-blue-500 text-xl "
                    >
                      <label className="block relative ">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          onChange={(e) => postBanner(e.target.files[0])}
                          className="absolute inset-0 opacity-0"
                          accept="image/*"
                        />
                        <FiEdit />
                      </label>
                    </button>
                    <button
                      type="button"
                      className=" w-16 h-16   border-none  absolute left-3  bottom-0 rounded-xl border"
                    >
                      <label className="block relative ">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          onChange={(e) => postImage(e.target.files[0])}
                          className="absolute inset-0 opacity-0"
                          accept="image/*"
                        />
                        <img
                          src={
                            user && user.image
                              ? user.image
                              : "https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.1195892238.1697052013&semt=sph"
                          }
                          className=" h-12 object-cover rounded object-center    "

                          //   className="absolute bottom-2 left-3 w-16 h-16 rounded-full"
                        />
                      </label>
                    </button>
                  </CardHeader>
                  <CardBody className="space-y-3 mt-20 rounded-none  border  ">
                    <div className="flex gap-2 items-center">
                      <p className="font-bold text-gray-800">Name:</p>
                      <p>{user && user.name && user.name}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="font-bold text-gray-800">Surname:</p>
                      <p>{user && user.surname && user.surname}</p>
                    </div>{" "}
                    <div className="flex gap-2 items-center">
                      <p className="font-bold text-gray-800">Username:</p>
                      <p>{user && user.username && user.username}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="font-bold text-gray-800">Email :</p>
                      <p>{user && user.email && user.email}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <p className="font-bold text-gray-800 ">Gender:</p>
                      <p className="line-clamp-4">
                        {user && user.gender && user.gender}
                      </p>
                    </div>{" "}
                    <div className="flex gap-10 items-start">
                      <p className="font-bold text-gray-800">Profession:</p>
                      <p className="line-clamp-2">
                        {user && user.profession && user.profession}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="grid  h-fit w-2/3 grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Name
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Surname
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.surname}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      surname: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Username
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Email
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>{" "}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Gender</label>
                <input
                  value={inputs.gender}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  type="text"
                  placeholder=""
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Age</label>
                <input
                  value={inputs.age}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      age: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  type="text"
                  placeholder=""
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Gender</label>
                <select
                  for="select-1"
                  value={inputs.gender}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  <option
                    value="male"
                    className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white  "
                  >
                    Female
                  </option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Profession</label>
                <select
                  for="select-1"
                  value={inputs.profession}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      profession: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  {dashboard_routes &&
                    dashboard_routes.slice(0, 8).map(({ route }, i) => (
                      <option
                        value={route}
                        key={i}
                        className="cursor-pointer capitalize px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
                      >
                        {route.replaceAll("-", " ")}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Race</label>
                <select
                  for="select-1"
                  value={inputs.race}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      race: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  {dashboard_routes &&
                    dashboard_routes.slice(13).map(({ route }, i) => (
                      <option
                        key={i}
                        value={route}
                        className="cursor-pointer capitalize px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
                      >
                        {route.replaceAll("-", " ")}
                      </option>
                    ))}
                </select>
              </div>{" "}
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Generation</label>
                <select
                  for="select-1"
                  value={inputs.generation}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      generation: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  {dashboard_routes &&
                    dashboard_routes.slice(8, 13).map(({ route }, i) => (
                      <option
                        value={route}
                        className="cursor-pointer capitalize px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
                      >
                        {route.replaceAll("-", " ")}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-span-full">
                <label className="text-sm">Bio</label>
                <textarea
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      description: e.target.value,
                    }))
                  }
                  style={{ border: "1px solid lightgray" }}
                  type="text"
                  placeholder=""
                  className="w-full p-4 h-32 rounded-md focus:border-blue-500 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          {/* Store location information starts here */}
          <fieldset className="lg:flex w-full  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2  lg:w-1/3 w-full col-span-full lg:col-span-1">
              <Typography variant="h5">Location</Typography>
              <div className="w-full">
                <Card variant="gradient" className="w-full bg-gray-100   p-8">
                  <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 bg-white/20 p-1">
                          <IoLocationOutline />
                        </span>
                        <p className="font-normal">
                          {user && user.address && user.address}
                        </p>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full    text-blue-500 bg-white/20 p-1">
                          <MdLocationSearching />
                        </span>
                        <Typography className="font-normal">
                          {user && user.city && user.city}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500  bg-white/20 p-1">
                          <BsThreeDots />
                        </span>
                        <Typography className="font-normal">
                          {user && user.postal_code && user.postal_code}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 bg-white/20 p-1">
                          <BsPinMap />
                        </span>
                        <Typography className="font-normal">
                          {user && user.state && user.state}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 p-1">
                          <BsGlobeAmericas />
                        </span>
                        <Typography className="font-normal">
                          {user && user.country && user.country}
                        </Typography>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-6 h-fit w-2/3 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Address
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.address}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      address: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  City
                </label>
                <Select onChange={(e) => setCity(e)} label="">
                  {cities &&
                    cities.map((c, i) => (
                      <Option key={i} value={c.name}>
                        {c.name}
                      </Option>
                    ))}
                </Select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Postal Code
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.postal_code}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      postal_code: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Region
                </label>
                <Select
                  onChange={(e) => {
                    setRegion(e.name);
                    setStateCode(e.isoCode);
                  }}
                  label=""
                >
                  {regions &&
                    regions.map((r, i) => (
                      <Option key={i} value={r}>
                        {r.name}
                      </Option>
                    ))}
                </Select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Country
                </label>
                <Select
                  onChange={(e) => {
                    setCountry(e.name);
                    setCountryCode(e.isoCode);
                  }}
                  label=""
                  S
                >
                  {countries &&
                    countries.map((c, i) => (
                      <Option key={i} value={c}>
                        {c.name}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
          </fieldset>
          {/* Store location info ends here */}
          {/* Store socials information starts here */}
          <fieldset className="lg:flex w-full  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 lg:w-1/3  col-span-full lg:col-span-1">
              <Typography variant="h5">Socials</Typography>
              <div className="w-full">
                <Card variant="gradient" className="w-full bg-gray-100   p-8">
                  <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 bg-white/20 p-1">
                          <AiOutlinePhone />
                        </span>
                        <p className="font-normal">
                          {user && user.mobile && user.mobile}
                        </p>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full    text-blue-500 bg-white/20 p-1">
                          <AiOutlineLinkedin />
                        </span>
                        <Typography className="font-normal">
                          {user && user.linkedin && user.linkedin}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500  bg-white/20 p-1">
                          <AiOutlineWhatsApp />
                        </span>
                        <Typography className="font-normal">
                          {user && user.whatsapp && user.whatsapp}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 bg-white/20 p-1">
                          <MdFacebook />
                        </span>
                        <Typography className="font-normal">
                          {user && user.facebook && user.facebook}
                        </Typography>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full   text-blue-500 p-1">
                          <BsInstagram />
                        </span>
                        <Typography className="font-normal">
                          {user && user.instagram && user.instagram}
                        </Typography>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="grid h-fit w-2/3  grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Mobile
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.mobile}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      mobile: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  LinkedIn
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.linkedin}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      linkedin: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  WhatsApp
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.whatsapp}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      whatsapp: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Facebook
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.facebook}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      facebook: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Instagram
                </label>
                <input
                  style={{ border: "1px solid lightgray" }}
                  value={inputs.instagram}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      instagram: e.target.value,
                    }))
                  }
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
            </div>
          </fieldset>
          {/* Store socials info ends here */}
        </form>
      </div>
    </div>
  );
}
