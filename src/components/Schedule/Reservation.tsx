import React, { FC } from "react";
import { ReservationInfo } from "../Schedule/ReservationInfo";
import { AvailabilityBar } from "./AvailabilityBar";
import { Counter } from "../Schedule/Counter";

interface IProps {
  id: number;
  attendants: number;
  maxAttendants: number;
  date: string;
  price: number;
  timeLength: number;
  room: string;
  therapeutName: string;
  name: string;
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
        therapyName={name}
        therapeutName={therapeutName}
        place={room}
        therapyLength={timeLength}
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
