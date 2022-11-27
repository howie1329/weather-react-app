import Card from "./pages/Card";
import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Searchbar from "./components/Searchbar";

//Assets Import
import hamburger from "./assets/hamburger.svg";
import SideMenu from "./components/SideMenu";

function App() {
  const [currentData, setCurrentData] = useState();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(true);
  const [location, setLocation] = useState();
  const [places, setPlaces] = useState(["neptune", "new york", "boston"]);

  useEffect(() => {
    getWeather(location);
  }, [location]);

  async function getWeather(town) {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        town +
        "&units=imperial&appid=5e71a87e02d6056237fcd1d92703c4a4"
    );
    const weatherData = await response.json();
    if (response.ok) {
      setCurrentData(weatherData);
      setLoading(false);
    } else {
      setLoading(true);
      console.log("error");
    }
  }

  const load = () => {
    if (loading) {
      return <p>Loading</p>;
    } else {
      return <Card data={currentData} />;
    }
  };

  const hidden = () => {
    return "hidden";
  };

  const show = () => {
    return "flex flex-col border-transparent rounded border-2 mt-16 w-48  absolute bg-darkblue py-2";
  };

  const saveLocation = (currentLocation, placesList) => {
    let pastPlaces = [...placesList];
    pastPlaces.push(currentLocation);
    setPlaces(pastPlaces);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-grad1 to-grad2 ">
      <div className={active ? show() : hidden()}>
        <SideMenu places={places} location={setLocation} />
      </div>
      <div className=" h-28 flex justify-around pt-4 ">
        <button className="w-10 h-10" onClick={(e) => setActive(!active)}>
          <img src={hamburger} alt="menu" />
        </button>
        <Searchbar location={setLocation} />
      </div>
      <div className="h-[38rem] min-w-full">
        {load()}
        <div className="flex justify-center  mt-5 px-2.5">
          <button
            className="border-transparent border-2 bg-darkblue rounded-full text-xl font-semibold text-white px-3 py-1"
            onClick={(e) => saveLocation(location, places)}
          >
            Save Current Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
