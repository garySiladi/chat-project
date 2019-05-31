import MockDate from "mockdate";
import {
  getDateByTimeString,
  getDifferenceBetweenDate,
  getDatePrefix,
  getFormattedDate,
  DatePrefix
} from "./date";

beforeAll(() => {
  MockDate.set("2019-05-18");
});

afterAll(() => {
  MockDate.reset();
});

describe("Testing date utility", () => {
  describe("returns difference between actual date and date given as a parameter", () => {
    test("difference between dates - no difference", () => {
      expect(getDifferenceBetweenDate(new Date())).toEqual(DatePrefix.TODAY);
    });
    test("difference between dates - One day", () => {
      expect(getDifferenceBetweenDate(new Date("2019-05-19"))).toEqual(
        DatePrefix.TOMMOROW
      );
    });
    test("difference between dates - More than one day", () => {
      expect(getDifferenceBetweenDate(new Date("2019-05-20"))).toEqual(2);
    });
    test("difference between dates - yesterday", () => {
      expect(getDifferenceBetweenDate(new Date("2019-05-17"))).toEqual(-1);
    });
  });

  describe("returns formatted date", () => {
    test("Convert date to text - today", () => {
      expect(getDateByTimeString("2019-05-18 00:00:00")).toEqual(
        "Dnes - Sobota 18. máj"
      );
    });
    test("Convert date to text - today 1 sec to midnight", () => {
      expect(getDateByTimeString("2019-05-18 23:59:59")).toEqual(
        "Dnes - Sobota 18. máj"
      );
    });
    test("Convert date to text - tommorow", () => {
      expect(getDateByTimeString("2019-05-19 00:00:00")).toEqual(
        "Zajtra - Nedeľa 19. máj"
      );
    });
    test("Convert date to text - tommorow 1 sec to midnight", () => {
      expect(getDateByTimeString("2019-05-19 23:59:59")).toEqual(
        "Zajtra - Nedeľa 19. máj"
      );
    });
    test("Convert date to text - other day bigger than actual", () => {
      expect(getDateByTimeString("2019-05-20 00:00:00")).toEqual(
        "Pondelok 20. máj"
      );
    });
    test("Convert date to text - other day smaller than actual", () => {
      expect(getDateByTimeString("2019-05-15 00:00:00")).toEqual(
        "Streda 15. máj"
      );
    });
    test("Invalid date", () => {
      expect(getDateByTimeString("das")).toEqual("Invalid Date");
    });
    test("Invalid time", () => {
      expect(getDateByTimeString("2019-05-17 23:61:59")).toEqual(
        "Invalid Date"
      );
    });
  });

  describe('returns prefix "Dnes" or "Zajtra"', () => {
    test("Calendar should return Dnes", () => {
      expect(getDatePrefix(0)).toEqual("Dnes");
    });
    test("Calendar should return Zajtra", () => {
      expect(getDatePrefix(1)).toEqual("Zajtra");
    });
    test("Calendar should return null because of smaller parameter than 0", () => {
      expect(getDatePrefix(-1)).toEqual(null);
    });
    test("Calendar should return null because of bigger parameter than 1", () => {
      expect(getDatePrefix(2)).toEqual(null);
    });
  });

  describe("formats date and adds the name of the day in front of date", () => {
    test('Should add "Pondelok" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-20 00:00:00"))).toEqual(
        "Pondelok 20. máj"
      );
    });
    test('Should add "Utorok" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-21 00:00:00"))).toEqual(
        "Utorok 21. máj"
      );
    });
    test('Should add "Streda" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-22 00:00:00"))).toEqual(
        "Streda 22. máj"
      );
    });
    test('Should add "Štvrtok" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-23 00:00:00"))).toEqual(
        "Štvrtok 23. máj"
      );
    });
    test('Should add "Piatok" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-24 00:00:00"))).toEqual(
        "Piatok 24. máj"
      );
    });
    test('Should add "Sobota" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-25 00:00:00"))).toEqual(
        "Sobota 25. máj"
      );
    });
    test('Should add "Nedeľa" before formatted date', () => {
      expect(getFormattedDate(new Date("2019-05-26 00:00:00"))).toEqual(
        "Nedeľa 26. máj"
      );
    });
  });
});
