import dynamic from "next/dynamic";
import React from "react";
const Continents = dynamic(() => import("@/components/pages/Continents"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div className="py-6 overflow-y-auto">
      <Continents continent={params.continent} />
    </div>
  );
}
