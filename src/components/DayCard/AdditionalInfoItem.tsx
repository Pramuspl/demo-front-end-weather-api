import React from "react";
import { AdditionalInfoItemStyle } from "./DayCard.styled";

interface AdditionalInfoItemProps {
  alt: string;
  Icon: React.ElementType;
  value: string;
}

const AdditionalInfoItem = ({ alt, Icon, value }: AdditionalInfoItemProps) => (
  <AdditionalInfoItemStyle>
    <Icon title={alt} /> <span>{value}</span>
  </AdditionalInfoItemStyle>
);

export default AdditionalInfoItem;
