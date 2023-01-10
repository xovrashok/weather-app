import React from "react";
import s from "./ThisDay.module.scss";

interface Props {
}

export const ThisDay = (props: Props) => {
  return (
    <div className={s.thisDay}>
      <div className={s.TopWrapper}>
        <div className={s.information}>
          <div className={s.temperature}>+15</div>
          <div className={s.date}>Среда, 12 мая</div>
        </div>
        <div className={s.weather}>svg</div>
      </div>
      <div className={s.BottomWrapper}>
        <div className={s.time}>12:00</div>
        <div className={s.city}></div>
      </div>
    </div>
  );
};
