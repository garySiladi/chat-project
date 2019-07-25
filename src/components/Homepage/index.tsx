import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { List } from "./List";
import { Description } from "../Description/Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { HomepageArticlesCollection } from "../ArticlesCollection/HomepageArticlesCollection";
import { ChatInfo } from "../ChatInfo";
export const HomePage: FC<RouteComponentProps> = () => (
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
    <HomepageArticlesCollection />
  </>
);
