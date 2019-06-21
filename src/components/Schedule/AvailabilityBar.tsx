import React, { FC } from "react";
import { ProgressBar } from "./ProgressBar";

interface IProps {
  currentReservation: number;
  maxReservation: number;
}

export const AvailabilityBar: FC<IProps> = ({
  currentReservation,
  maxReservation
}) => (
  <>
    <div
      data-cy="Availability"
      className="flex justify-between lg:pt-20 pt-8 text-12 font-lato font-bold"
    >
      <div>Obsadenosť</div>
      <div>
        <span>{currentReservation}/</span>
        <span>{maxReservation}</span>
      </div>
    </div>
    <ProgressBar actual={currentReservation} max={maxReservation} />
  </>
);
