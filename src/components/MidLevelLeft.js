import React from "react";

export default function MidLevelLeft({ lowTemp, feelsLike, highTemp }) {
  return (
    <div className="flex flex-col justify-center  rounded-2xl py-3 px-1.5 gap-1 border-transparent border-2 h-[131px] w-[53%] text-center text-white bg-middlegray">
      <p className="text-xl font-semibold">Low: {lowTemp}</p>
      <p className="text-xl font-semibold">Feels Like: {feelsLike}</p>
      <p className="text-xl font-semibold">High: {highTemp}</p>
    </div>
  );
}
