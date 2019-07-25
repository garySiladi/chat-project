import React, { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Schedule } from "../Schedule";
import { ScheduleFilter } from "../ScheduleFilter/ScheduleFilter";
import { Button } from "../Button";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";

export const MySchedule = () => (
  <div className="flex flex-col items-center text-center shadow-2xl bg-white p-32 lg:pt-64 lg:w-730">
    <div className="leading-46 font-gilbert text-31 lg:leading-57 lg:text-31 text-black">
      Pre zobrazenie Vášho rozvrhu sa prosím prihláste
    </div>
    <div className="font-lato mt-12 mb-32">
      Na tomto mieste bude zobrazený zoznam arteterapií na ktoré ste si
      rezervovali miesto.
    </div>
    <Button className="w-238">Prihlásenie</Button>
  </div>
);

export const ScheduleCollectionPage: FC<RouteComponentProps> = () => {
  const [isMyScheduleShown, showMySchedule] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row justify-around m-24">
        <div className="w-full mb-12 lg:mb-0 lg:w-2/5">
          {isMyScheduleShown ? (
            <Button
              className="pl-12 w-full text-left"
              onClick={() => showMySchedule(false)}
              isStretched
            >
              Všetky CHAT arteterapie
            </Button>
          ) : (
            <ScheduleFilter />
          )}
        </div>
        <Button
          className="w-full lg:w-2/5"
          isInverted={isMyScheduleShown}
          onClick={() => showMySchedule(true)}
        >
          Môj rozvrh
        </Button>
      </div>
      <div>{isMyScheduleShown ? <MySchedule /> : <Schedule />}</div>
      <div className="text-center mt-64 lg:w-730">
        <DescriptionAndButton />
      </div>
    </div>
  );
};
