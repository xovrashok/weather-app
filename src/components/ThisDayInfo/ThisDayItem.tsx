import React from "react";
import s from "./ThisDayInfo.module.scss";
import {
    Precipitation,
    Pressure,
    Temperature,
    Wind,
} from "../Images/WeatherInfo";
import {Item} from "./ThisDayInfo";

interface Props {
    item: Item,
}

export const ThisDayItem = ({item}: Props) => {
    const {icon_id, title, value} = item;
    return (
       <div>
              <div className={s.wrapper}>
                    <div className={s.imageWrapper}>
                        {icon_id === "temp" && <Temperature/>}
                        {icon_id === "Pressure" && <Pressure/>}
                        {icon_id === "Precipitation" && <Precipitation/>}
                        {icon_id === "Wind" && <Wind/>}
                    </div>
                    <div className={s.title}>{title}</div>
                    <div className={s.value}>{value}</div>
              </div>
       </div>
    );
};
