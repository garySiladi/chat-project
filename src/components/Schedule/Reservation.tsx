import React, { FC } from "react";
import { ReservationInfo, IReservationInfo } from "../Schedule/ReservationInfo";
import { AvailabilityBar } from "./AvailabilityBar";
import { Counter } from "../Schedule/Counter";
import dayjs = require("dayjs");

interface IProps extends IReservationInfo {
  attendants: number;
  maxAttendants: number;
}
export const Reservation: FC<IProps> = ({
  attendants,
  maxAttendants,
  date,
  price,
  timeLength,
  room,
  therapeutName,
  name = "CHAT"
}) => (
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
      <ReservationInfo
        date={dayjs(date).format("HH:MM")}
        name={name}
        therapeutName={therapeutName}
        room={room}
        timeLength={timeLength}
        price={price}
      />
    </div>
    <div className="w-full lg:w-1/2">
      <AvailabilityBar
        maxReservation={maxAttendants}
        currentReservation={attendants}
      />
      <Counter />
    </div>
  </div>
);
