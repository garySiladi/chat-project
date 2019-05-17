import React, { FC } from "react";

interface IProps {
  name: string;
  placeholder: string;
}

export const Input: FC<IProps> = ({ name, placeholder }) => (
  <div>
    <label className="text-xs text-grey font-lato mb-2 mt-3">{name}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-10 font-lato text-sm hover:shadow-lg pl-4 border-solid border border-black rounded-xl"
    />
  </div>
);
