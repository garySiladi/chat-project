import React from "react";
import { CloseButton } from "../CloseButton";
import { Message } from "../Message";
import { InfoMessage } from "../InfoMessage";
import { Button } from "../Button";
import { Popup } from "../Popup";

export const CreditPopup = () => (
  <Popup>
    <div>
      <CloseButton />
      <Message text="Ooops…" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov aby ste sa mohli prihlási’t na zvolenú arteterapiu." />
    </div>
    <div>
      <Button className="h-50" text="Nákup kreditov" backgroundColor="black" />
    </div>
  </Popup>
);
