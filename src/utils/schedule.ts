interface IScheduleBackendVersion {
  id: number;
  price: number;
  date: Date;
  room: number;
  attendants: number;
  max_attendants: number;
  artetherapy_id: number;
  time_length: number;
  therapeut_name: string;
}

export interface ISchedule {
  id: number;
  price: number;
  date: Date;
  room: number;
  attendants: number;
  maxAttendants: number;
  artetherapyId: number;
  timeLength: number;
  therapeutName: string;
}

export const normalizeScheduleData = ({
  max_attendants,
  artetherapy_id,
  time_length,
  therapeut_name,
  ...otherData
}: IScheduleBackendVersion): ISchedule =>
  Object.assign(
    {
      maxAttendants: max_attendants,
      artetherapyId: artetherapy_id,
      timeLength: time_length,
      therapeutName: therapeut_name
    },
    otherData
  );
