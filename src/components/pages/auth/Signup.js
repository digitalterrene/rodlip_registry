"use client";
import { useAuthContext } from "@/context/AuthContext";
import { rodlip_server } from "@/urls/rodlip_urls";
import { Checkbox } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({});
  const { dispatch } = useAuthContext();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const response = await fetch(`${rodlip_server}/users/register`, {
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
      toast.success("User created successfully", {
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
    <div classNameName="p-3  ">
      <Toaster />
      <div className="flex  w-full">
        {/* <!-- Hero --> */}
        <div className="mx-auto max-w-screen-md py-16  px-4  md:max-w-screen-xl    md:px-8">
          <div className=" ">
            <form
              onSubmit={handleSubmit}
              className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
            >
              <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
                Register
              </h1>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className=""> First Name </label>
                  <input
                    type="text"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Your Name"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />
                </div>
                <div>
                  <label className=""> Last Name </label>
                  <input
                    type="text"
                    value={inputs.surname}
                    onChange={(e) =>
                      setInputs((prevState) => ({
                        ...prevState,
                        surname: e.target.value,
                      }))
                    }
                    placeholder="Last  Name"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />
                </div>
              </div>
              <div>
                <label className=""> Username </label>
                <input
                  type="text"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                  placeholder="Username"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                />
              </div>
              <div>
                <label className=""> Email Address </label>
                <input
                  type="email"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                  placeholder="you@rodlip.org"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                />
              </div>
              <div>
                <label className=""> Password </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                />
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label className=""> Gender </label>
                  <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
                    <input
                      className="peer hidden"
                      type="checkbox"
                      name="select-1"
                      id="select-1"
                    />
                    <select
                      for="select-1"
                      value={inputs.gender}
                      onChange={(e) =>
                        setInputs((prevState) => ({
                          ...prevState,
                          gender: e.target.value,
                        }))
                      }
                      className="flex w-full h-14 cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring mt-5"
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
                </div>
                <div>
                  <label className="">
                    {" "}
                    Phone:{" "}
                    <span className="text-sm text-gray-400">
                      (optional)
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    value={inputs.mobile}
                    onChange={(e) =>
                      setInputs((prevState) => ({
                        ...prevState,
                        mobile: e.target.value,
                      }))
                    }
                    placeholder="+543 5445 0543"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />
                </div>
              </div>

              <div className="checkbox flex items-center">
                <Checkbox
                  onClick={() => setShowPassword(!showPassword)}
                  color="blue"
                  defaultChecked
                />
                <label for="checkbox1">Show Password</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
                >
                  Get Started
                </button>
              </div>
              <span>
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 mt-3">
                  Signin
                </a>
              </span>
            </form>
          </div>
        </div>

        <img
          src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104937.jpg?size=626&ext=jpg&ga=GA1.1.1195892238.1697052013&semt=sph"
          className="   h-screen w-1/2    bg-no-repeat object-center object-cover"
        />
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
}
