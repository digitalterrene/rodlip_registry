import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { AiOutlineLogin } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";
import user_logo from "@/assets/components/user.png";
import { HiUserCircle } from "react-icons/hi";
export default function ProfileIcon() {
  const { user, dispatch } = useAuthContext();
  const router = useRouter();
  const logout = () => {
    const toastId = toast.loading("Loging out...");
    localStorage.removeItem("rodlip_user");
    dispatch({ type: "LOGOUT" });
    setTimeout(() => {
      toast.success("User successfully logged out", {
        id: toastId,
      });
      router.push("/");
    }, 3000);
  };
  return (
    <div className=" flex justify-end w-20">
      <Menu>
        <MenuHandler className="    my-1 w-8 h-8 cursor-pointer text-sm rounded-full ">
          {user && user.image ? (
            <Avatar src={user.image} alt={`${user.email}`} className="" />
          ) : (
            <img src={user_logo.src} className="" />
          )}
        </MenuHandler>
        <MenuList className="-ml-3 mt-2">
          <MenuItem className="flex cursor-pointer items-center gap-2">
            <HiUserCircle className="h-4 w-4" />
            <Typography
              as="a"
              href={user && user._id ? `/user/profile/${user._id}` : "#"}
              variant="small"
              className="font-normal"
            >
              My Profile
            </Typography>
          </MenuItem>

          <hr className="my-2 border-blue-gray-50" />
          {!user ? (
            <MenuItem className="flex text-green-600 items-center gap-2 ">
              <AiOutlineLogin />
              <Typography
                as="a"
                href="/signin"
                variant="small"
                className="font-normal"
              >
                Sign In
              </Typography>
            </MenuItem>
          ) : (
            <MenuItem className="flex text-red-600 items-center gap-2 ">
              <PowerIcon strokeWidth={2} className="h-4 w-4" />
              <Typography
                onClick={() => logout()}
                variant="small"
                className="font-normal"
              >
                Sign Out
              </Typography>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      <Toaster />
    </div>
  );
}
