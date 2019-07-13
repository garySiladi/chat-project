import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { List } from "./List";
import { Description } from "../Description/Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { ArticlesCollection } from "../ArticlesCollection";
import { ChatInfo } from "../ChatInfo";
import { Wrapper } from "../ArticlesCollection/HomepageWrapper";
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
    <ArticlesCollection limit="3">
      {articles => <Wrapper articles={articles} />}
    </ArticlesCollection>
  </>
);
