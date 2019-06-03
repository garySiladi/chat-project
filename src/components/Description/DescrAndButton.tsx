import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "../Description/Description";

interface IProps {
  isLoggedIn?: boolean;
}

export const DescrAndButton: FC<IProps> = ({ isLoggedIn }) => {
  const { descriptionText, buttonText } = {
    descriptionText: isLoggedIn
      ? "Pri viacmesačnom predpladtnom zľava až 20%"
      : "Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.",
    buttonText: isLoggedIn ? "Nákup kreditov" : "Registrovať sa"
  };
  return (
    <div className="w-4/5 m-auto lg:w-1/2">
      <Description>{descriptionText}</Description>
      <span className="bg-white p-16">
        <Button isInverted>{buttonText}</Button>
      </span>
    </div>
  );
};
