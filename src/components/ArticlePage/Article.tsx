import React, { FC } from "react";

interface IProps {
  date: string;
  title: string;
  subtitle: string;
  paragraph: string;
  source: string;
  text: string;
}
export const Article: FC<IProps> = ({
  date,
  title,
  subtitle,
  paragraph,
  source,
  text
}) => (
  <article className="ml-24 mr-24 lg:ml-96 lg:mr-96">
    <div className="font-lato text-10 font-normal text-grey pt-16">{date}</div>
    <h1 className="font-gilbert text-31 font-bold text-black pb-16 pt-20">
      {title}
    </h1>
    <h2 className="font-lato text-16 font-bold text-black pb-16">{subtitle}</h2>
    <p className="font-lato text-16 font-normal text-black pb-48">
      {paragraph}
    </p>
    <span className="font-lato text-10 font-normal text-black">{source}</span>
    <span className="font-lato text-10 font-normal text-grey inline-block pl-8 pb-32">
      {text}
    </span>
  </article>
);
