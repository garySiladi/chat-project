import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { List } from "./List";

export const ScheduleFilter = () => {
  const [isShown, setShown] = useState(false);

  return (
    <div className="relative">
      <Dropdown isShown={isShown} onClick={() => setShown(!isShown)} />
      {isShown && <List />}
    </div>
  );
};
