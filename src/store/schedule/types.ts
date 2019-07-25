import { ISchedule } from "../../utils/schedule";

export const FETCH_SCHEDULE_BEGIN = "FETCH_SCHEDULE_BEGIN";
export const FETCH_SCHEDULE_SUCCESS = "FETCH_SCHEDULE_SUCCESS";
export const FETCH_SCHEDULE_FAILURE = "FETCH_SCHEDULE_FAILURE";

export interface IFetchScheduleBegin {
  type: typeof FETCH_SCHEDULE_BEGIN;
}

export interface IFetchScheduleSuccess {
  type: typeof FETCH_SCHEDULE_SUCCESS;
  payload: { schedule: ISchedule[] };
}

export interface IFetchScheduleFailure {
  type: typeof FETCH_SCHEDULE_FAILURE;
  payload: { error: Error };
}

export type ScheduleActionTypes =
  | IFetchScheduleBegin
  | IFetchScheduleSuccess
  | IFetchScheduleFailure;
