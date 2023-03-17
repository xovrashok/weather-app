import React from "react";

import s from "./Days.module.scss";

interface Props {}

export const Days = () => {
  return (
    <div className={s.container}>
        <div className={s.days}>
            <div className={s.day}>
                <div className={s.day__number}>1</div>
                <div className={s.day__name}>Monday</div>
            </div>
        </div>
    </div>
  );
};
