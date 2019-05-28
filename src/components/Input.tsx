import React, { FC } from "react";

interface IProps {
  name: string;
  placeholder: string;
}

export const Input: FC<IProps> = ({ name, placeholder }) => (
  <div>
    <label className="text-10 text-grey font-lato mb-8 mt-12">{name}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-40 font-lato text-12 hover:shadow-lg pl-16 border-solid border border-black rounded-12"
    />
  </div>
);
