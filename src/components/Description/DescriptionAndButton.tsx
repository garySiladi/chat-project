import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "../Description/Description";

interface IProps {
  isLoggedIn?: boolean;
}

export const DescriptionAndButton: FC<IProps> = ({ isLoggedIn = false }) => {
  const descriptionText = isLoggedIn
    ? "Pri viacmesačnom predpladtnom zľava až 20%"
    : "Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.";

  const buttonText = isLoggedIn ? "Nákup kreditov" : "Registrovať sa";
  return (
    <div>
      <Description>{descriptionText}</Description>
      <span
        className="bg-white p-16 leading-1 inline-block relative"
        style={{ transform: "rotate(1deg)", top: "-10" }}
      >
        <div style={{ transform: "rotate(-1deg)" }}>
          <Button isInverted>{buttonText}</Button>
        </div>
      </span>
    </div>
  );
};
