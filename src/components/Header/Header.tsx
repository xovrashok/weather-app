import React from "react";
import Select from "react-select";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

export const Header = () => {
  const options = [
    { value: "city-1", label: "Киев" },
    { value: "city-2", label: "Харьков" },
    { value: "city-3", label: "Красноград" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "7px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={s.title}>React Weather</div>
        <div>test</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[1]} options={options} styles={colourStyles}/>
      </div>
    </div>
  );
};
