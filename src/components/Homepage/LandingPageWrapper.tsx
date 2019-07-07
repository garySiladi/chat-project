import React from "react";
import { List } from "./List";
import { Description } from "../Description/Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { NewestArticles } from "./NewestArticles";
import { ChatInfo } from "../ChatInfo";

export const LandingPageWrapper = () => (
  <>
    <Logo />
    <DescriptionWrapper>
      <Description>
        <ChatInfo />
      </Description>
    </DescriptionWrapper>
    <List />
    <DescriptionWrapper>
      <DescriptionAndButton />
    </DescriptionWrapper>
    <NewestArticles />
  </>
);
