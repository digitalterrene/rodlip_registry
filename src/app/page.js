import Root from "@/components/pages/routes/Root";
import { rodlip_server } from "@/urls/rodlip_urls";
import React from "react";

export default async function page() {
  const response = await fetch(`${rodlip_server}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const json = await response.json();
  return (
    <div>
      <Root users={json} />
    </div>
  );
}
