import React from "react";
const ProfileView = dynamic(() => import("@/components/pages/ProfileView"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div>
      <ProfileView id={params.id} />
    </div>
  );
}
