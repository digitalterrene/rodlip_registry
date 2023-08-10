import React,{useState,useEffect} from "react";
import { AiOutlineLayout, AiOutlineShareAlt } from "react-icons/ai";
import { BiLayout } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoFingerPrintOutline } from "react-icons/io5";
import pb from "@/assets/profilebanner.jpg";
export default function Profile({ user_data }) {
  const [date_joined,setDateJoined]= useState(null)
createdAt
 useEffect(()=>{
   if(user_data &&user_data.createdAt){
   const formattedDate = user_data.createdAt.toLocaleDateString('en-US', {day: 'numeric' , month: 'long', year: 'numeric' })
     setDateJoined(formattedDate)
   }
 },[user_data])
  return (
    <div>
      <div className="container mx-auto my-5 lg:p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto rounded-xl w-full mx-auto"
                  src={
                    user_data && user_data.image
                      ? user_data.image
                      : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                  }
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {user_data && user_data.username
                  ? user_data.username
                  : "Username"}
              </h1>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {user_data && user_data.decription
                  ? user_data.decription
                  : "Description"}
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                
                <li className="flex items-center py-3">
                  <span>ID</span>
                  <span className="ml-auto">
                    {user_data && user_data._id}
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">
                    {user_data && date_joined}
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 ">
            <div className="mb-20">
              <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                <img
                  src={
                    user_data && user_data.banner ? user_data.banner : pb.src
                  }
                  className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                />
                <div className="absolute left-5 -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                  <img
                    className="h-full w-full rounded-full"
                    src={
                      user_data && user_data.image
                        ? user_data.image
                        : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 py-10 my-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <IoFingerPrintOutline className="text-2xl" />
                </span>
                <span className="tracking-wide">
                  Authentication Information
                </span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> Name</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.name ? user_data.name : "Name"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Surname</div>
                    <div className="px-4 py-2">
                      {" "}
                      {user_data && user_data.surname
                        ? user_data.surname
                        : "Surname"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2 ">
                      {" "}
                      {user_data && user_data.gender
                        ? user_data.gender
                        : "Rather not Say"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Date of Birth</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.date_of_birth
                        ? user_data.date_of_birth
                        : "Date of Birth"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Generation</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.generation
                        ? user_data.generation
                        : "Generation"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Screen Name</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.username
                        ? user_data.username
                        : "Username"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.usernemailame
                        ? user_data.email
                        : "Email"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 py-10 my-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <AiOutlineLayout className="text-2xl" />
                </span>
                <span className="tracking-wide">Dashboard Information</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      {" "}
                      Professional Email
                    </div>
                    <div className="px-4 py-2">
                      {user_data && user_data.professional_email
                        ? user_data.professional_email
                        : "Professional Email"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Access Key</div>
                    <div className="px-4 py-2">
                      {" "}
                      {user_data && user_data.access_key
                        ? user_data.access_key
                        : "Access Key"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Secret Key</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.vertueal
                        ? user_data.vertueal
                        : "Secret Key"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">User Id</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.user_id
                        ? user_data.user_id
                        : "User Id"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Registry</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.registry
                        ? user_data.registry
                        : "Registry"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 py-10 my-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <HiOutlineLocationMarker className="text-2xl" />
                </span>
                <span className="tracking-wide">Location Information</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> Address</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.address
                        ? user_data.address
                        : "Address"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">City</div>
                    <div className="px-4 py-2">
                      {" "}
                      {user_data && user_data.city ? user_data.city : "City"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Postal Code</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.postal_code
                        ? user_data.postal_code
                        : "Postal Code"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Region</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.region
                        ? user_data.region
                        : "Region"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Country</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.country
                        ? user_data.country
                        : "Country"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Continent</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.continent
                        ? user_data.continent
                        : "Continent"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 py-10 my-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <AiOutlineShareAlt className="text-2xl" />
                </span>
                <span className="tracking-wide">Socials Information</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> Phone Number</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.mobile
                        ? user_data.mobile
                        : "Mobile"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Website</div>
                    <div className="px-4 py-2">
                      {" "}
                      {user_data && user_data.website
                        ? user_data.website
                        : "Website"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Linkedin</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.linkedin
                        ? user_data.linkedin
                        : "LinkedIn"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Instagram</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.instagram
                        ? user_data.instagram
                        : "Region"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Whatsapp</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.whatsaap
                        ? user_data.whatsaap
                        : "Country"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Threads</div>
                    <div className="px-4 py-2">
                      {user_data && user_data.threads
                        ? user_data.threads
                        : "Threads"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
