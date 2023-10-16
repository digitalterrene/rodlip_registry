import dynamic from "next/dynamic";
import React from "react";
const Template = dynamic(() => import("@/components/pages/params/Template"), {
  ssr: false,
});
export default function page({ params }) {
  return (
    <div className="  overflow-y-auto">
      <Template heading="continent" subheading={params.continent} />
    </div>
  );
}
