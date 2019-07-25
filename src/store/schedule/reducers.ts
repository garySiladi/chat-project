import {
  FETCH_SCHEDULE_BEGIN,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE,
  ScheduleActionTypes
} from "./types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function scheduleReducer(
  state = initialState,
  action: ScheduleActionTypes
): any {
  switch (action.type) {
    case FETCH_SCHEDULE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.schedule
      };
    case FETCH_SCHEDULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
