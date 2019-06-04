import React, { FC } from "react";
import { ReservationInfo, IReservationInfo } from "../Schedule/ReservationInfo";
import { AvailabilityBar } from "./AvailabilityBar";
import { Counter } from "../Schedule/Counter";

interface IProps extends IReservationInfo {
  id: number;
  attendants: number;
  maxAttendants: number;
}
export const Reservation: FC<IProps> = ({
  id,
  attendants,
  maxAttendants,
  date,
  price,
  timeLength,
  room,
  therapeutName,
  name
}) => (
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
      <ReservationInfo
        date={date}
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
