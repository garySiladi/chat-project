import React from "react";
import styled from "@emotion/styled";
import background from "../../static/svg/backgroundImage.svg";
import { ArticlesCollection } from "./ArticlesCollection";
import { BackgroundImage } from "../Homepage/BackgroundImage";
import { Description } from "../Description/Description";
import { DescrAndButton } from "../Description/DescrAndButton";

const DescriptionWrapper = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;
export const Container = () => (
  <BackgroundImage url={background} isCover>
    <DescriptionWrapper>
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </DescriptionWrapper>
    <ArticlesCollection />
    <DescriptionWrapper>
      <DescrAndButton />
    </DescriptionWrapper>
  </BackgroundImage>
);
