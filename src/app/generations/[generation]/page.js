import dynamic from "next/dynamic";
import React from "react";
const Generations = dynamic(() => import("@/components/pages/Generations"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div className="py-6 overflow-y-auto">
      <Generations generation={params.generation} />
    </div>
  );
}
