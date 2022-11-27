import React from "react";

export default function TopLevel({
  cityName,
  currentTemp,
  weatherDescription,
}) {
  return (
    <div className="flex flex-col text-center gap-2">
      <p className="text-4xl font-medium text-white">{cityName}</p>
      <p className="text-6xl font-bold text-white">{currentTemp}</p>
      <p className="text-3xl font-semibold text-white">{weatherDescription}</p>
    </div>
  );
}
