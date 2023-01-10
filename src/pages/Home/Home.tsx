import React from "react";

import s from "./Home.module.scss";
import { ThisDay } from "../../components/ThisDay/ThisDay";
import { ThisDayInfo } from "../../components/ThisDayInfo/ThisDayInfo";
import { Tabs } from "../../components/Days/Tabs";

interface Props {}

export const Home = () => {
  return (
    <div>
      <div className={s.home}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Tabs />
    </div>
  );
};
