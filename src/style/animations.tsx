import React, { FC } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./animations.css";

export const TopSlideAnimation: FC = ({ children }) => (
  <CSSTransitionGroup
    transitionName="fade-transition"
    transitionEnterTimeout={200}
    transitionLeaveTimeout={200}
  >
    {children}
  </CSSTransitionGroup>
);

export const ScaleHoverAnimation: FC = ({ children }) => (
  <div className="scale-animation">{children}</div>
);
