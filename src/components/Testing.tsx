import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Schedule } from "./Schedule";

export const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Schedule />
    <Schedule />
  </div>
);
