import React from "react";

import s from "./Days.module.scss";

interface Props {}

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(null);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab.id);
  };

  const tabs = [
    {
      id: 0,
      value: "На неделю",
    },
    {
      id: 1,
      value: "На месяц",
    },
    {
      id: 2,
      value: "На 10 дней",
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.leftWrapper}>
        {tabs.map((tab) => (
          <div
            className={activeTab ? s.active : s.wrapper}
            onClick={() => handleTabClick(tab.id)}
            key={tab.id}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.rightWrapper}>
        <div className={s.wrapperCancel}>Отменить</div>
      </div>
    </div>
  );
};
