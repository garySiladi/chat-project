import React, { FC } from "react";

interface IProps {
  date: string;
  therapyName: string;
  doctorName: string;
  place: string;
  therapyLength: number;
  price: number;
}

export const ReservationInfo: FC<IProps> = ({
  date,
  therapyName,
  doctorName,
  place,
  therapyLength,
  price
}) => (
  <div className="pt-16">
    <div className="flex">
      <div className="text-21 font-gilbert border-solid pt-px pr-8 pb-8 border-lilac border-r">
        {date}
      </div>
      <div className="text-21 ml-8 mt-px font-gilbert">{therapyName}</div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "54px" }}
        className="text-12 font-lato text-grey border-solid p-4 pr-8 border-lilac border-r"
      >
        Terapeutka {doctorName}
      </div>

      <div className="ml-8 text-12 font-lato text-grey">
        Miestnosť č.{place}
      </div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "54px" }}
        className="mt-px text-12 font-lato text-grey border-solid p-4 pr-8 border-lilac border-r"
      >
        {therapyLength} minút
      </div>
      <div className="mt-px ml-4 text-12 font-lato text-grey">Cena:</div>
      <div className="mt-px ml-4 text-18 font-gilbert">{price}€</div>
    </div>
  </div>
);
