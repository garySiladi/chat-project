import React from "react";
import { CheckboxLine } from "./CheckboxLine";

const data = [
  "Všetko",
  "Baby CHAT",
  "Kids CHAT",
  "Relax CHAT",
  "Clay CHAT",
  "Move CHAT",
  "Terapeutické projektívne karty",
  "Wine and Paint",
  "Pet CHAT",
  "Mandala",
  "Coaching CHAT",
  "Skills CHAT",
  "Indivindi"
];

export const List = () => (
  <ul className="rounded-b-8 border-2 border-solid pb-24 absolute left-0 right-0 bg-white pl-0">
    {data.map(text => (
      <CheckboxLine key={text}>{text}</CheckboxLine>
    ))}
  </ul>
);
