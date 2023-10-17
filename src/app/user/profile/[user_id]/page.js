"use client";
import ManageUser from "@/components/pages/crud/ManageUser";
import { rodlip_server } from "@/urls/rodlip_urls";
import React, { useEffect, useState } from "react";

export default function page({ params }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("rodlip_user")
          ? JSON.parse(localStorage.getItem("rodlip_user")).token
          : null;

        if (!token) {
          throw new Error("Access denied. No auth token provided");
        }

        const response = await fetch(
          `${rodlip_server}/users/${params.user_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [params.user_id]);

  return (
    <div>
      <ManageUser user={user} error={error} />
    </div>
  );
}
