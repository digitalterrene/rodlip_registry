import React from "react";

export default function SectionTitle({
  title,
  paragraph,
  width = "600px",
  center,
  mb = "100px",
}) {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        <h4 className="mb-2 capitalize text-3xl font-bold !leading-tight text-black dark:text-white  ">
          {title}
        </h4>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
}
