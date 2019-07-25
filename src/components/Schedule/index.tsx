import React from "react";
import { connect } from "react-redux";
import { DayInfoMessage } from "../Schedule/DayInfoMessage";
import { Reservation } from "./Reservation";
import { ISchedule } from "src/utils/schedule";

interface IProps {
  schedule: ISchedule[];
}

export const ScheduleComponent = ({ schedule }: IProps) => (
  <div className="shadow-lg m-auto mt-12 bg-white lg:w-730">
    <DayInfoMessage text="Dnes - Pondelok 23. apríl" />
    <div className="lg:px-24">
      {schedule.map((therapy: any) => (
        <div
          key={therapy.id}
          className="border-b border-lilac lg:pb-24 pb-16 px-24"
        >
          <Reservation {...therapy} />
        </div>
      ))}
    </div>
  </div>
);

export const Schedule = connect<any, any, any>((state: any) => ({
  schedule: state.schedule.items
}))(ScheduleComponent);
