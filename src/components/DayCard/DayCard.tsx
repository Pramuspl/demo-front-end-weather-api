import React from "react";
import {
  BaseInfo,
  Expandable,
  ExpandableAdditional,
  ExpandableBase,
  MainContainer,
  Time,
  Temp,
  Description,
} from "./DayCard.styled";
import { DayObjProps } from "../../helpers/types";
import {
  RainIcon,
  CloudsIcon,
  WindIcon,
  PressureIcon,
  UVIcon,
} from "../../img";
import AdditionalInfoItem from "./AdditionalInfoItem";

interface DayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: DayObjProps;
}

const iconURL = (iconName: string) =>
  `https://www.weatherbit.io/static/img/icons/${iconName}.png`;

const DayCard = ({ data }: DayCardProps) => {
  const date = new Date(data.valid_date);
  return (
    <MainContainer>
      <Expandable>
        <ExpandableBase>
          <Time dateTime={data.valid_date} className="icon">
            <em>{date.toLocaleString("en-EN", { weekday: "long" })}</em>
            <strong>{date.toLocaleString("en-EN", { month: "long" })}</strong>
            <span>{date.getDate()}</span>
          </Time>
          <Temp>{data.temp}°C</Temp>
        </ExpandableBase>
        <ExpandableAdditional>
          <AdditionalInfoItem
            Icon={RainIcon}
            alt="Rain chance"
            value={`${data.pop}%`}
          />
          <AdditionalInfoItem
            Icon={CloudsIcon}
            alt="Cloud coverage"
            value={`${data.clouds}%`}
          />
          <AdditionalInfoItem
            Icon={WindIcon}
            alt="Wind speed"
            value={`${data.wind_spd.toFixed(2)} m/s`}
          />
          <AdditionalInfoItem
            Icon={PressureIcon}
            alt="Air pressure"
            value={`${data.pres.toFixed(2)} mb`}
          />
          <AdditionalInfoItem
            Icon={UVIcon}
            alt="UV index"
            value={`${data.uv.toFixed(2)}`}
          />
        </ExpandableAdditional>
      </Expandable>
      <BaseInfo>
        <img src={iconURL(data.weather.icon)} alt={data.weather.icon} />
        <Description>{data.weather.description}</Description>
      </BaseInfo>
    </MainContainer>
  );
};

export default DayCard;
