import { usePathname } from "next/navigation";
import React from "react";
import SectionTitle from "./SectionTitle";

export default function Breadcrumb() {
  const pathname = usePathname();
  return (
    <div className=" ">
      <SectionTitle title={pathname.split("/")[1]} />
    </div>
  );
}
