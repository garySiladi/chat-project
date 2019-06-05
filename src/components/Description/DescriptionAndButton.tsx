import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "./Description";

interface IProps {
  isLoggedIn?: boolean;
}

export const DescriptionAndButton: FC<IProps> = ({ isLoggedIn }) => {
  const { descriptionText, buttonText } = {
    descriptionText: isLoggedIn
      ? "Pri viacmesačnom predpladtnom zľava až 20%"
      : "Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.",
    buttonText: isLoggedIn ? "Nákup kreditov" : "Registrovať sa"
  };
  return (
    <>
      <div className="w-4/5 m-auto" style={{ lineHeight: "57px" }}>
        <Description>{descriptionText}</Description>
      </div>
      <span className="bg-white p-20">
        <Button isInverted>{buttonText}</Button>
      </span>
    </>
  );
};
