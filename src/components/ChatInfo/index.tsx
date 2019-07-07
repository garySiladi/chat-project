import React, { FC } from "react";
import { TextBackground } from "./TextBackground";

const MobileText: FC = props => (
  <div className="bg-white px-8">{props.children}</div>
);

export const ChatInfo = () => (
  <div className="flex justify-center">
    <div className="font-gilbert text-45 text-black flex flex-col items-center md:hidden">
      <MobileText>CHAT je unikátnym</MobileText>
      <MobileText>medzinárodným</MobileText>
      <MobileText>arteterapeutickým</MobileText>
      <MobileText>centrom v</MobileText>
      <MobileText>Košiciach</MobileText>
      <MobileText>pre deti, mládež</MobileText>
      <MobileText>a dospelých,</MobileText>
      <MobileText>ktoré sa zaoberá</MobileText>
      <MobileText>liečbou umením</MobileText>
      <MobileText>použitím nielen</MobileText>
      <MobileText>tradičných foriem</MobileText>
      <MobileText>umenia, ale aj</MobileText>
      <MobileText>digitálneho</MobileText>
      <MobileText>umenia.</MobileText>
    </div>
    <div className="font-gilbert text-45 text-black hidden md:block">
      <TextBackground
        width={663}
        height={60}
        right={8}
        bottom={0}
        zIndex={1}
        deg={1}
        left={5}
        top={0}
      >
        CHAT je unikátnym medzinárodným
      </TextBackground>
      <TextBackground
        width={705}
        height={64}
        right={0}
        bottom={7.5}
        deg={-1}
        left={8}
        top={-6}
      >
        arteterapeutickým centrom v Košiciach
      </TextBackground>
      <TextBackground
        width={558}
        height={56}
        right={0}
        zIndex={1}
        bottom={13}
        deg={0.6}
        left={10}
        top={-16}
      >
        pre deti, mládež a dospelých,
      </TextBackground>
      <TextBackground
        width={634}
        height={56}
        right={0}
        bottom={18}
        deg={-0.7}
        left={17}
        top={-22}
      >
        ktoré sa zaoberá liečbou umením
      </TextBackground>
      <TextBackground
        width={765}
        height={45}
        right={5}
        zIndex={1}
        deg={1}
        bottom={22}
        left={15}
        top={-28}
      >
        použitím nielen tradičných foriem umenia,
      </TextBackground>
      <TextBackground
        width={480}
        height={60}
        right={0}
        bottom={30}
        deg={-1}
        left={10}
        top={-22}
      >
        ale aj digitálneho umenia.
      </TextBackground>
    </div>
  </div>
);
