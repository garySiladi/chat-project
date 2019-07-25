import { Dispatch } from "redux";
import { backendHostname } from "../../RoutesConfig";
import { normalizeScheduleData, ISchedule } from "../../utils/schedule";
import {
  FETCH_SCHEDULE_BEGIN,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE
} from "./types";

export const fetchScheduleBegin = () => ({
  type: FETCH_SCHEDULE_BEGIN
});

export const fetchScheduleSuccess = (schedule: ISchedule[]) => ({
  type: FETCH_SCHEDULE_SUCCESS,
  payload: { schedule }
});

export const fetchScheduleFailure = (error: Error) => ({
  type: FETCH_SCHEDULE_FAILURE,
  payload: { error }
});

export const fetchSchedule = (page = "1", limit = "12") => (
  dispatch: Dispatch
) => {
  dispatch(fetchScheduleBegin());
  return fetch(
    `${backendHostname.dev}/therapy_schedules?_page=${page}&_limit=${limit}`
  )
    .then(response => response.json())
    .then(response =>
      dispatch(fetchScheduleSuccess(response.map(normalizeScheduleData)))
    )
    .catch(error => dispatch(fetchScheduleFailure(error)));
};
