import React from "react";
import s from "./ThisDayInfo.module.scss";
import {
  Precipitation,
  Pressure,
  Temperature,
  Wind,
} from "../Images/WeatherInfo";
import { ThisDayItem } from "./ThisDayItem";
import { Cloud } from "../Images/Cloud";

interface Props {}

export interface Item {
  icon_id?: string;
  title?: string;
  value?: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      title: "Температура",
      value: "testtestetsttest",
    },
    {
      icon_id: "Pressure",
      title: "Давление",
      value: "testtestetsttest",
    },
    {
      icon_id: "Precipitation",
      title: "Осадки",
      value: "testtestetsttest",
    },
    {
      icon_id: "Wind",
      title: "Ветер",
      value: "testtestetsttest",
    },
  ];
  return (
    <div className={s.thisDayInfo}>
      <div className={s.cloudPosition}>
        <Cloud />
      </div>
        {items.map((item: Item, index) => {
          return <ThisDayItem item={item} key={index} />;
        })}
    </div>
  );
};
