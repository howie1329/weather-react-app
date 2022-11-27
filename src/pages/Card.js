import React from "react";
import MidLevel from "../components/MidLevel";
import TopLevel from "../components/TopLevel";

function Card({ data }) {
  return (
    <div className="flex flex-col min-w-full items-center px-2.5 gap-10">
      <TopLevel
        cityName={data["name"]}
        currentTemp={data["main"]["temp"]}
        weatherDescription={data["weather"][0]["main"]}
      />
      <MidLevel data={data} />
    </div>
  );
}

export default Card;
