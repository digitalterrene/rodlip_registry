"use client";
import { useAuthContext } from "@/context/AuthContext";
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
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch } = useAuthContext();
  const router = useRouter();
  //crerating activity record when user logs in
  // user

  const handleSubmit = async () => {
    const toastId = toast.loading("Loading...");
    const response = await fetch(
      "https://server.entities.vertueal.com/entities/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
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
    <div className="p-3 py-16">
      <Card className=" lg:w-96 mt-6 w-full  p-2  m-auto lg:mt-10">
        <CardHeader
          variant="gradient"
          className="mb-4 bg-black grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign in to Account
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            size="lg"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            size="lg"
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => handleSubmit()} className="bg-black" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don{"'"}t have an account{"?"}
            <Typography
              as="a"
              href="/signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}
