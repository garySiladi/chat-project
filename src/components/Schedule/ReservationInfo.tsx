import React, { FC } from "react";

interface IProps {
  date: string;
  therapyName: string;
  therapeutName: string;
  place: string;
  therapyLength: number;
  price: number;
}

export const ReservationInfo: FC<IProps> = ({
  date,
  therapyName,
  therapeutName,
  place,
  therapyLength,
  price
}) => (
  <div className="pt-16">
    <div className="flex font-gilbert">
      <div className="text-21 border-solid pt-px pr-8 pb-8 border-lilac border-r">
        {date}
      </div>
      <div className="text-21 ml-8 mt-px">{therapyName}</div>
    </div>
    <div className="flex flex-row items-center font-lato">
      <div
        style={{ marginLeft: "54px" }}
        className="text-12 text-grey border-solid p-4 pr-8 border-lilac border-r"
      >
        Terapeut {therapeutName}
      </div>
      <div className="ml-8 text-12 text-grey">Miestnosť č.{place}</div>
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
