import React, { FC } from "react";
import { Layout } from "../Layout";
import { RouteComponentProps } from "@reach/router";
import { LandingPageWrapper } from "../Homepage/LandingPageWrapper";
export const Home: FC<RouteComponentProps> = () => (
  <Layout>
    <LandingPageWrapper />
  </Layout>
);
