import React, { useState } from "react";
import { Icon } from "../Icon";
import minusIcon from "../../static/svg/minus.svg";
import plusIcon from "../../static/svg/plus.svg";
import { Button } from "../Button";

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <>
      <div className="pt-16 text-12 font-lato font-bold">Počet miest</div>
      <div className="pt-4 flex">
        <div className="flex justify-between" style={{ width: "168px" }}>
          <div className="w-40 h-40">
            <Button onClick={decrement} isStretched>
              <Icon src={minusIcon} className="mx-auto" />
            </Button>
          </div>
          <div className="h-40 w-80">
            <Button isStretched>{counter}</Button>
          </div>
          <div className="w-40 h-40">
            <Button onClick={increment} isStretched>
              <Icon src={plusIcon} className="mx-auto" />
            </Button>
          </div>
        </div>
        <Button isInverted isStretched className="flex-1 ml-16">
          Rezervovať
        </Button>
      </div>
    </>
  );
};
