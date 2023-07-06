import dynamic from "next/dynamic";
import React from "react";
const Registries = dynamic(() => import("@/components/pages/Registries"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div className="py-6 overflow-y-auto">
      <Registries registry={params.registry} />
    </div>
  );
}
