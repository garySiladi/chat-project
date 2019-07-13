import React, { FC } from "react";

interface IProps {
  date: string;
  title: string;
  subtitle: string;
  source: string;
  text: string[];
}
export const Article: FC<IProps> = ({
  date,
  title,
  subtitle,
  source,
  text
}) => (
  <article className="font-lato ml-24 mr-24 pb-24 lg:ml-96 lg:mr-96">
    <div className="text-10 font-normal text-grey pt-16">{date}</div>
    <h1 className="font-gilbert text-31 font-bold text-black pb-16 pt-20">
      {title}
    </h1>
    <h2 className="text-16 font-bold text-black pb-32">{subtitle}</h2>
    {text.map(paragraph => (
      <p
        key={paragraph.slice(10)}
        className="text-16 font-normal text-black pb-32"
      >
        {paragraph}
      </p>
    ))}
    <span className="text-10 font-normal text-black">Zdroj: {source}</span>
  </article>
);
