import { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";

import { api } from "./lib/axios";
import {
  Box,
  Location,
  Main,
  PopoverTrigger,
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  Weather,
} from "./styles/pages/home";
import { Gear } from "phosphor-react";
import { SearchBar } from "./components/SearchBar";

interface Weather {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    temp_f: number;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    name: string;
    region: string;
    country: string;
  };
}

export function App() {
  const [weatherInfo, setWeatherInfo] = useState<Weather>();
  const [tempNotation, setTempNotation] = useState(false);
  const [windNotation, setWindNotation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      api
        .get(
          `/current.json?key=${import.meta.env.VITE_API_KEY}&q=
            ${position.coords.latitude}
          ,${position.coords.longitude}`
        )
        .then((response) => {
          setWeatherInfo(response.data);
        });
    });
  }, []);

  function getSearchResults(searchResult: string) {
    api
      .get(
        `/current.json?key=${import.meta.env.VITE_API_KEY}&q=
            ${searchResult}`
      )
      .then((response) => {
        setWeatherInfo(response.data);
      });
  }

  function handleChangeTempNotation() {
    setTempNotation(!tempNotation);
    console.log("temp: " + tempNotation);
  }

  function handleChangeWindNotation() {
    setWindNotation(!windNotation);
    console.log("wind: " + windNotation);
  }

  return (
    <Main>
      <Popover.Root>
        <PopoverTrigger>
          <Gear size={30} weight="bold" />
        </PopoverTrigger>
        <Popover.Content sideOffset={5}>
          <SwitchContainer>
            <div>
              <SwitchRoot
                onCheckedChange={handleChangeTempNotation}
                defaultChecked={tempNotation}
              >
                <SwitchThumb />
              </SwitchRoot>
              <span>Show temp in fahrenheit</span>
            </div>
            <div>
              <SwitchRoot
                onCheckedChange={handleChangeWindNotation}
                defaultChecked={windNotation}
              >
                <SwitchThumb />
              </SwitchRoot>
              <span>Show wind speed in mph</span>
            </div>
          </SwitchContainer>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Root>
      <Box>
        <SearchBar getSearchResults={getSearchResults} />
        <Location>
          {weatherInfo ? (
            <h2>
              {weatherInfo.location.name}, {weatherInfo.location.country}
            </h2>
          ) : (
            <h2>Loading...</h2>
          )}
        </Location>
        <Weather>
          {tempNotation ? (
            <h1>{weatherInfo?.current.temp_f}°f</h1>
          ) : (
            <h1>{weatherInfo?.current.temp_c}°C</h1>
          )}
          <div>
            <img src={weatherInfo?.current.condition.icon} alt="" />
            <h3>{weatherInfo?.current.condition.text}</h3>
          </div>
          <h3>Humidity: {weatherInfo?.current.humidity}%</h3>
          {windNotation ? (
            <h3>Wind speed: {weatherInfo?.current.wind_mph}mph</h3>
          ) : (
            <h3>Wind speed: {weatherInfo?.current.wind_kph}km/h</h3>
          )}
        </Weather>
      </Box>
    </Main>
  );
}
