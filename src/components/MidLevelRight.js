import React from "react";

export default function MidLevelRight({ pressure, humidity, windSpeed }) {
  return (
    <div className="flex flex-col justify-center py-3 px-1.5 gap-1 rounded-2xl border-transparent border-2  h-[131px] w-9/12 text-center text-white bg-middlegray">
      <p className="text-xl font-semibold">Pressure: {pressure}</p>
      <p className="text-xl font-semibold">Humidity: {humidity}</p>
      <p className="text-xl font-semibold">Wind Speed: {windSpeed}mph</p>
    </div>
  );
}
