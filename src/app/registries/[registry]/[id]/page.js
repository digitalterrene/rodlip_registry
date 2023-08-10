import Dashboard from "@/components/pages/Dashboard";
import Profile from "@/components/pages/Dashboard";
import dynamic from "next/dynamic";
import React from "react";
const ProfileView = dynamic(() => import("@/components/pages/ProfileView"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div>
      <Dashboard id={params.id} />
    </div>
  );
}
