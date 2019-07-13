import React, { useState } from "react";
import { Image } from "../Image";
import minusIcon from "../../static/svg/minusIcon.svg";
import plusIcon from "../../static/svg/plusIcon.svg";
import { Button } from "../Button";

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <>
      <div className="pt-16 text-12 font-lato font-bold">Počet miest</div>
      <div className="pt-4 flex">
        <div className="flex justify-start">
          <div className="w-40 h-40 mr-4">
            <Button onClick={decrement} isStretched>
              <Image src={minusIcon} className="mx-auto" />
            </Button>
          </div>
          <div className="h-40 w-40 lg:w-80 mr-4">
            <Button isStretched>{counter}</Button>
          </div>
          <div className="w-40 h-40 mr-4">
            <Button onClick={increment} isStretched>
              <Image src={plusIcon} className="mx-auto" />
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
