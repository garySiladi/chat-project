import React from "react";
import { CloseButton } from "../CloseButton";
import { Message } from "../Message";
import { InfoMessage } from "../InfoMessage";
import { Button } from "../Button";
import { TextUnderButton } from "../TextUnderButton";
import { Popup } from "../Popup";
import { PaymentInfo } from "../PaymentInfo";

export const RegistrationPopup = () => (
  <Popup>
    <div>
      <CloseButton />
      <Message text="Záväzná registrácia" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
      <PaymentInfo text="Cena arteterapie - 10 €" textColor="black" />
    </div>
    <div>
      <Button text="Potvrdiť a zaplatiť" backgroundColor="green" />
      <TextUnderButton
        text="Z hodiny sa môžte odhlásiť do 24 hodín pred jej začiatkom
a kredity Vám budú vrátené."
      />
    </div>
  </Popup>
);
