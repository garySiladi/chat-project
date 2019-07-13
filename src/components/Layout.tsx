import React, { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackgroundImage } from "./BackgroundImage";
import { ScrollUp } from "./ScrollUp";

export const Layout: FC = props => (
  <>
    <Header />
    <BackgroundImage>
      <div
        className="flex justify-center w-full pb-256"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, white 100%)"
        }}
      >
        <div className="max-w-1280">{props.children}</div>
      </div>
    </BackgroundImage>
    <ScrollUp />
    <Footer />
  </>
);
