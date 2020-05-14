import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Input, PrimaryButton } from "../../components/Inputs";
import { DayCard } from "../../components";
import {
  DaysContainer,
  ErrorMessage,
  MainContainer,
  SearchContainer,
} from "./Main.styled";
import { DayObjProps } from "../../helpers/types";
import { getWeather } from "../../services/weatherService";

import { mockData } from "../../mockData";

const Main = () => {
  const { locationName } = useParams();
  const [inputValue, setInputValue] = useState(locationName ?? "");
  const [error, setError] = useState(false);
  const [result, setResult] = useState<DayObjProps[]>([]);
  // replace with this line (and optionally disable button) to use mock data to save API calls
  // const [result, setResult] = useState<DayObjProps[]>(mockData.data);

  useEffect(() => {
    setInputValue(locationName ?? "");
    if (locationName) {
      setError(false);
      getWeather(locationName)
        .then((res) => setResult(res))
        .catch(() => {
          setError(true);
          setResult([]);
        });
    }
  }, [locationName]);

  return (
    <MainContainer>
      <SearchContainer>
        <Input
          value={inputValue}
          onChange={(v) => setInputValue(v.target.value)}
        />
        <NavLink to={`/${inputValue}`}>
          <PrimaryButton>
            Get 16 days forecast for selected location
          </PrimaryButton>
        </NavLink>
        {error && <ErrorMessage>Location not found</ErrorMessage>}
      </SearchContainer>
      {result.length > 0 && (
        <DaysContainer>
          {result.map((day: DayObjProps) => (
            <DayCard data={day} key={day.valid_date} />
          ))}
        </DaysContainer>
      )}
    </MainContainer>
  );
};

export default Main;
