import React, { FC } from "react";

export interface IReservationInfo {
  date: string;
  name: string;
  therapeutName: string;
  room: string;
  timeLength: number;
  price: number;
}

export const ReservationInfo: FC<IReservationInfo> = ({
  date,
  name,
  therapeutName,
  room,
  timeLength,
  price
}) => (
  <div className="pt-16">
    <div className="flex font-gilbert text-21">
      <div className="border-solid pt-px pr-8 pb-8 border-lilac border-r">
        {date}
      </div>
      <div className="ml-8 mt-px">{name}</div>
    </div>
    <div className="flex flex-row items-center font-lato text-12">
      <div
        data-cy="Terapeut"
        className="text-grey border-solid p-4 pr-8 border-lilac border-r ml-54"
      >
        Terapeut {therapeutName}
      </div>
      <div data-cy="Room" className="ml-8 text-grey">
        Miestnosť č.{room}
      </div>
    </div>
    <div className="flex flex-row items-center">
      <div
        data-cy="TimeLength"
        className="mt-px text-12 font-lato text-grey border-solid p-4 pr-4 border-lilac border-r ml-54"
      >
        {timeLength} minút
      </div>
      <div data-cy="Price" className="mt-px mx-4 text-12 font-lato text-grey">
        Cena:
      </div>
      <div data-cy="Euro" className="mt-px ml-4 text-18 font-gilbert">
        {price}€
      </div>
    </div>
  </div>
);
