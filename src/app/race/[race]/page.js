import { rodlip_server } from "@/urls/rodlip_urls";
import dynamic from "next/dynamic";
import React from "react";
const Template = dynamic(() => import("@/components/pages/params/Template"), {
  ssr: false,
});
export default async function page({ params }) {
  const response = await fetch(`${rodlip_server}/users/search/race`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({ search_value: params.race }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const json = await response.json();
  return (
    <div className="  overflow-y-auto">
      <Template data={json} heading="race" subheading={params.race} />
    </div>
  );
}
