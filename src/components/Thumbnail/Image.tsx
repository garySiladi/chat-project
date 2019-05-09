import React, { FC } from "react";

interface IProps {
  icon: string;
}
export const Image: FC<IProps> = ({ icon }) => {
  return <img className="mb-2" alt="therapy-Image" src={icon} />;
};
