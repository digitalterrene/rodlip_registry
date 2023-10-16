import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Alert,
  Avatar,
  Button,
  Input,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tabs,
  Select,
  Option,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { AiOutlineEdit } from "react-icons/ai";
import { useAuthContext } from "@/context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
export default function Edit({ user_data }) {
  const [inputs, setInputs] = useState({});
  const { user, dispatch } = useAuthContext();
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [generation, setGeneration] = useState("");
  const [registry, setRegistry] = useState("");
  const [continent, setContinent] = useState("");
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const postImage = (pics) => {
    const toastId = toast.loading("Loading..");
    if (pics === undefined) {
      toast.error("Image is required.", {
        id: toastId,
        className: "capitalize",
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
        .then((data) => {
          setImage(data.url.toString());
          toast.success(`Successfully uploaded image.`, {
            id: toastId,
            className: "capitalize",
          });
          setImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err} `, {
            id: toastId,
            className: "capitalize",
          });
        });
    } else {
      toast.error("Please select image", {
        id: toastId,
        className: "capitalize",
      });
      return;
    }
  };
  const postBanner = (pics) => {
    const toastId = toast.loading("Loading..");
    if (pics === undefined) {
      toast.error("Banner is required.", {
        id: toastId,
        className: "capitalize",
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
        .then((data) => {
          setBanner(data.url.toString());
          toast.success(`Successfully uploaded banner.`, {
            id: toastId,
            className: "capitalize",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err} `, {
            id: toastId,
            className: "capitalize",
          });
        });
    } else {
      toast.error("Please select image", {
        id: toastId,
        className: "capitalize",
      });
      return;
    }
  };
  const handleSubmit = async (e) => {
    const toastId = toast.loading("Loading...");
    const response = await fetch(
      `https://server.entities.vertueal.com/entities/${user_data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inputs,
          generation,
          registry,
          image,
          banner,
          continent,
        }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      toast.error(`${json.error}`, {
        id: toastId,
      });
    }
    if (response.ok) {
      toast.success("Dashboard updated successfully", {
        id: toastId,
      });
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return (
    <div>
      {user_data && user_data && (
        <div className="p-4">
          <div className="flex p-6 w-full  rounded-2xl justify-between items-center border gap-4">
            <div className="flex   justify-between items-center  gap-4">
              <Avatar
                src={
                  user_data && user_data.image
                    ? user_data.image
                    : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                }
                alt="avatar"
                variant="rounded"
              />
              <div>
                <Typography variant="h6">{user_data.email}</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Account Type
                </Typography>
              </div>
            </div>
          </div>
          <div className=" p-6 w-full my-3  rounded-2xl justify-between items-center border gap-4">
            <div className="flex w-full  justify-between items-center  gap-4">
              <Typography className="text-gray-500">
                Authentication Information
              </Typography>
              <Button
                onClick={() => handleSubmit()}
                variant="outlined"
                className="capitalize flex items-center  rounded-full text-gray-500 border-black"
              >
                update
                <AiOutlineEdit className="text-xl ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
              <Input
                name="username"
                onChange={handleChange}
                value={inputs.username}
                label="Username"
              />
              <Input
                name="email"
                onChange={handleChange}
                value={inputs.email}
                label="Email"
              />
              <Input
                name="password"
                onChange={handleChange}
                value={inputs.password}
                label="Password"
                className=" "
              />
            </div>
          </div>
          <div className=" p-6 w-full my-3  rounded-2xl justify-between items-center border gap-4">
            <div className="flex w-full  justify-between items-center  gap-4">
              <Typography className="text-gray-500">
                Personal Information
              </Typography>
              <Button
                onClick={() => handleSubmit()}
                variant="outlined"
                className="capitalize flex items-center  rounded-full text-gray-500 border-black"
              >
                update
                <AiOutlineEdit className="text-xl ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
              <Input
                name="name"
                onChange={handleChange}
                value={inputs.name}
                label=" Name"
              />
              <Input
                name="surname"
                onChange={handleChange}
                value={inputs.surname}
                label="Surname"
              />
              <Input
                type="file"
                onChange={(e) => postImage(e.target.files[0])}
                label="Image"
              />
              <Input
                name="date_of_birth"
                onChange={handleChange}
                value={inputs.date_of_birth}
                label="Date of Birth"
                className=" col-span-2"
              />{" "}
              <Select
                onChange={(e) => setGeneration(e)}
                value={generation}
                label="Generation"
              >
                <Option value="baby_boomers">Baby Boomers</Option>
                <Option value="gen_x">Generation X</Option>
                <Option value="millennials">Millennials</Option>
                <Option value="gen_z">Generation Z</Option>
                <Option value="gen_alpha">Generation Alpha</Option>
              </Select>
            </div>
          </div>
          <div className=" p-6 w-full my-3  rounded-2xl justify-between items-center border gap-4">
            <div className="flex w-full  justify-between items-center  gap-4">
              <Typography className="text-gray-500">
                Dashboard Information
              </Typography>
              <Button
                onClick={() => handleSubmit()}
                variant="outlined"
                className="capitalize flex items-center  rounded-full text-gray-500 border-black"
              >
                update
                <AiOutlineEdit className="text-xl ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
              <Input
                name="professional_email"
                onChange={handleChange}
                value={inputs.professional_email}
                label="Professional Email"
                className=" "
              />
              <Input
                name="access_key"
                onChange={handleChange}
                value={inputs.access_key}
                label="Access Key"
                className=" "
              />
              <Input
                name="vertueal"
                onChange={handleChange}
                value={inputs.vertueal}
                label="Security Key"
                className=" "
              />

              <div className="lg:col-span-2">
                <Textarea
                  name="description"
                  onChange={handleChange}
                  value={inputs.description}
                  label="Description"
                  className=" "
                />
              </div>
              <Input
                type="file"
                onChange={(e) => postBanner(e.target.files[0])}
                label="Banner"
                className=" "
              />
              <Input
                name="user_id"
                onChange={handleChange}
                value={inputs.user_id}
                label="User Id"
                className=" "
              />
              <Select
                onChange={(e) => setRegistry(e)}
                value={registry}
                label="Registry"
              >
                <Option value="federal_ecopolitical_noble_assembly_committee">
                  FENAC
                </Option>
                <Option value="employment_consumption_equating_agency">
                  ECEA
                </Option>
                <Option value="morality_enforcement_and_retaintion_body">
                  MERA
                </Option>
                <Option value="specialized_companies_active_registering_agency">
                  SCARA
                </Option>
                <Option value="perrenial_legacy">PL</Option>
              </Select>
            </div>
          </div>
          <div className=" p-6 w-full my-3  rounded-2xl justify-between items-center border gap-4">
            <div className="flex w-full  justify-between items-center  gap-4">
              <Typography className="text-gray-500">
                Location Information
              </Typography>
              <Button
                onClick={() => handleSubmit()}
                variant="outlined"
                className="capitalize flex items-center  rounded-full text-gray-500 border-black"
              >
                update
                <AiOutlineEdit className="text-xl ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
              <Input
                name="address"
                onChange={handleChange}
                value={inputs.address}
                label="address"
                className=" "
              />
              <Input
                name="continent"
                onChange={handleChange}
                value={inputs.continent}
                label="continent"
                className=" "
              />
              <Input
                name="region"
                onChange={handleChange}
                value={inputs.region}
                label="region"
                className=" "
              />
              <Input
                name="country"
                onChange={handleChange}
                value={inputs.country}
                label="country"
                className=" "
              />
              <Input
                name="city"
                onChange={handleChange}
                value={inputs.city}
                label="city"
                className=" "
              />
              <Input
                name="postal_code"
                onChange={handleChange}
                value={inputs.postal_code}
                label="postal_code"
                className=" "
              />
              <Select
                onChange={(e) => setContinent(e)}
                value={continent}
                label="Region"
              >
                <Option value="north_america">North America</Option>
                <Option value="south_america">South America</Option>
                <Option value="europe">Europe</Option>
                <Option value="africa">Africa</Option>
                <Option value="australia">Australia</Option>
                <Option value="asia">Asia</Option>
                <Option value="antarctica">Antarctica</Option>
              </Select>
            </div>
          </div>
          <div className=" p-6 w-full my-3  rounded-2xl justify-between items-center border gap-4">
            <div className="flex w-full  justify-between items-center  gap-4">
              <Typography className="text-gray-500">
                Socials Information
              </Typography>
              <Button
                onClick={() => handleSubmit()}
                variant="outlined"
                className="capitalize flex items-center  rounded-full text-gray-500 border-black"
              >
                update
                <AiOutlineEdit className="text-xl ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
              <Input
                name="website"
                onChange={handleChange}
                value={inputs.website}
                label="Website"
                className=" "
              />
              <Input
                name="instagram"
                onChange={handleChange}
                value={inputs.instagram}
                label="Instagram"
                className=" "
              />
              <Input
                name="linkedin"
                onChange={handleChange}
                value={inputs.linkedin}
                label="Linkedin"
                className=" "
              />
              <Input
                name="whatsapp"
                onChange={handleChange}
                value={inputs.whatsapp}
                label="Whatsapp"
                className=" "
              />
              <Input
                name="twitter"
                onChange={handleChange}
                value={inputs.twitter}
                label="Twitter"
                className=" "
              />
              <Input
                name="mobile"
                onChange={handleChange}
                value={inputs.mobile}
                label="Mobile"
                className=" "
              />
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
