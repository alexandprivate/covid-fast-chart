import React from "react";

export default function Placeholder() {
  return (
    <>
      <div className="flex flex-wrap border-b border-white">
        <div className="h-48 md:h-16  flex-1 bg-gray-200" />
        <div className="h-48 md:h-16  flex-1 bg-gray-200" />
        <div className="h-48 md:h-16  flex-1 bg-gray-200" />
        <div className="h-48 md:h-16  flex-1 bg-gray-200" />
      </div>
      <div className="flex">
        <div className="h-16 flex-1 bg-gray-200" />
        <div className="h-16 flex-1 bg-gray-200" />
        <div className="h-16 flex-1 bg-gray-200" />
      </div>
    </>
  );
}
