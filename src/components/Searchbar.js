import React from "react";

//Assets
import glass from "../assets/glass.svg";

export default function Searchbar({ location }) {
  return (
    <div className="flex justify-between w-80 h-8 rounded-full border-2 border-black bg-middlegray">
      <img className="pl-2" src={glass} />
      <input
        className="pl-4 font-medium w-72 rounded-full"
        type="search"
        onChange={(e) => location(e.target.value)}
      />
    </div>
  );
}
