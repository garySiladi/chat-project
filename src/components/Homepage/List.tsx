import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import smallChildrenIcon from "../../static/svg/icon-therapy-type-deti-do-3-rokov.svg";
import childrenIcon from "../../static/svg/icon-therapy-type-deti-4-15.svg";
import adultIcon from "../../static/svg/icon-therapy-type-pre-dospelych.svg";
import individualIcon from "../../static/svg/icon-therapy-type-pre-dospeleho.svg";
import blueOval from "../../static/svg/blueOval.svg";
import orangeOval from "../../static/svg/orangeOval.svg";
import pinkOval from "../../static/svg/pinkOval.svg";
import greenOval from "../../static/svg/greenOval.svg";

export const List = () => (
  <div className="flex flex-col items-center m-0 bg-white relative p-24 lg:m-48 text-center">
    <h1 className="font-gilbert text-31">Arteterapie</h1>
    <div className="pt-24 pb-32 font-lato font-normal lg:w-3/4">
      Naše arteterapie sú vhodné pre deti, mládež ale aj dospelých so zdravotným
      znevýhodnením, problémami v učení, s poruchami správania alebo pre tých čo
      trpia traumami, stratami, smútkom, depresiou alebo vyhorením. Arteterapie
      vedia pomôcť tiež v medziľudských a rodinných vzťahoch.
    </div>
    <div className="flex flex-col relative w-full lg:flex-row justify-center">
      <Icon
        src={smallChildrenIcon}
        url={blueOval}
        title="Pre deti do 3 rokov"
        to="smallChildren"
      />
      <Icon
        src={childrenIcon}
        url={orangeOval}
        title="Pre deti od 4 do 12 rokov"
        to="children"
      />
      <Icon src={adultIcon} title="Pre dospelých" to="adults" url={pinkOval} />
      <Icon
        src={individualIcon}
        title="Individúalne hodiny"
        to="individials"
        url={greenOval}
      />
    </div>
    <div className="w-256 mt-20 border border-solid rounded-8 bg-white">
      <Button className="text-black font-lato font-bold">
        Všetky naše arteterapie
      </Button>
    </div>
  </div>
);
