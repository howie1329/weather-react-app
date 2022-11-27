import React from "react";
import MidLevelLeft from "./MidLevelLeft";
import MidLevelRight from "./MidLevelRight";

export default function MidLevel({ data }) {
  return (
    <div className="flex justify-center rounded-2xl min-w-full mx-2.5 p-5 gap-6 border-transparent border-2 bg-darkblue">
      <MidLevelLeft
        lowTemp={data["main"]["temp_min"]}
        feelsLike={data["main"]["feels_like"]}
        highTemp={data["main"]["temp_max"]}
      />
      <MidLevelRight
        pressure={data["main"]["pressure"]}
        humidity={data["main"]["humidity"]}
      />
    </div>
  );
}
