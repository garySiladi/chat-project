import React from "react";
import styled from "@emotion/styled";
import background from "../../static/svg/backgroundImage.svg";
import { AllArticles } from "./ArticlesCollection";
import { BackgroundImage } from "../Homepage/BackgroundImage";
import { Description } from "../Description/Description";
import { DescrAndButton } from "../Description/DescrAndButton";

const DescriptionWrapper = styled.div`
  width: 85%;
  margin: auto;
  text-align: center;
  padding-top: 10px;
`;
export const Container = () => (
  <BackgroundImage url={background} isCover>
    <DescriptionWrapper>
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </DescriptionWrapper>
    <AllArticles />
    <DescriptionWrapper>
      <DescrAndButton />
    </DescriptionWrapper>
  </BackgroundImage>
);
