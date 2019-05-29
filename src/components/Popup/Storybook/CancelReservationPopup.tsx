import React from "react";
import { CloseButton } from "../CloseButton";
import { Message } from "../Message";
import { InfoMessage } from "../InfoMessage";
import { Button } from "../Button";
import { TextUnderButton } from "../TextUnderButton";
import { Popup } from "../Popup";
import { PaymentInfo } from "../PaymentInfo";

export const CancelReservationPopup = () => (
  <Popup>
    <div>
      <CloseButton />
      <Message text="Chystáte sa zrušiť rezerváciu" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
      <PaymentInfo text="Kredit 10 € Vám bude vrátený" textColor="green" />
    </div>
    <div>
      <Button text="Zrušiť rezerváciu" backgroundColor="red" />
      <TextUnderButton
        text="Z hodiny sa môžte odhlásiť do 24 hodín pred jej začiatkom
a kredity Vám budú vrátené."
      />
    </div>
  </Popup>
);
