"use client";
import { useAuthContext } from "@/context/AuthContext";
import { rodlip_server } from "@/urls/rodlip_urls";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({});

  const { dispatch } = useAuthContext();
  const router = useRouter();
  //crerating activity record when user logs in
  // user

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const response = await fetch(`${rodlip_server}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const json = await response.json();

    if (!response.ok) {
      toast.error(`${json.error}`, {
        id: toastId,
      });
    }
    if (response.ok) {
      toast.success("User logged in successfully", {
        id: toastId,
      });
      //save the user to local storage
      setTimeout(() => {
        toast.success("Routing to homepage", {
          id: toastId,
        });
        router.push("/");
      }, 2000);
      localStorage.setItem("rodlip_user", JSON.stringify(json));
      //update the authcontext
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return (
    <div classNameName="p-3 py-16">
      <Toaster />
      <div className="bg-white w-full">
        <div className="min-h-screen w-full  text-gray-900 flex gap-20 justify-between">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white   sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
                <div className="w-full flex-1 mt-8">
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto space-y-4 max-w-xs"
                  >
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      value={inputs.email}
                      onChange={(e) =>
                        setInputs((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                      placeholder="Email"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type={showPassword ? "text" : "password"}
                      value={inputs.password}
                      onChange={(e) =>
                        setInputs((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }))
                      }
                      placeholder="Password"
                    />
                    <Checkbox
                      onClick={() => setShowPassword(!showPassword)}
                      color="blue"
                      label="Show Password"
                    />
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">Sign In</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="  w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?size=626&ext=jpg&ga=GA1.1.1195892238.1697052013&semt=sph')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
