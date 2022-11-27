import React from "react";

export default function SideMenu({ places, location }) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-xl font-semibold text-white underline">
        Saved Locations
      </p>
      {places.map((item) => {
        return (
          <button
            value={item}
            className="border-transparent border-2 bg-middlegray rounded-full text-xl font-semibold text-white"
            onClick={(e) => location(e.target.value)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
