import dayjs from "dayjs";
import "dayjs/locale/sk";

export enum DatePrefix {
  TODAY = 0,
  TOMMOROW = 1
}

export const getDatePrefix = (difference: number): "Dnes" | "Zajtra" | null => {
  const roundedDifference = Math.floor(difference);
  if (
    roundedDifference < DatePrefix.TODAY ||
    roundedDifference > DatePrefix.TOMMOROW
  ) {
    return null;
  }
  return roundedDifference === DatePrefix.TOMMOROW ? "Zajtra" : "Dnes";
};

export const getDifferenceBetweenDate = (dateObject: Date): number => {
  return dayjs(dateObject)
    .startOf("day")
    .diff(dayjs().startOf("day"), "day", true);
};

export const getFormattedDate = (dateObject: Date): string =>
  dayjs(dateObject)
    .locale("sk")
    .format("dddd DD. MMM");

export const getDateByTimeString = (date: string): string => {
  const dateObject = new Date(date);
  if (isNaN(dateObject.getTime())) {
    return "Invalid Date";
  }
  const diff = getDifferenceBetweenDate(dateObject);

  const prefix = getDatePrefix(diff);

  return prefix
    ? `${prefix} - ${getFormattedDate(dateObject)}`
    : getFormattedDate(dateObject);
};
