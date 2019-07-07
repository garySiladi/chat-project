import React, { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import { BackgroundImage } from "../Homepage/BackgroundImage";

export const Layout: FC = props => (
  <>
    <Header />
    <BackgroundImage>
      <div
        className="flex justify-center w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 90%, white 95%, white 100%)"
        }}
      >
        <div style={{ maxWidth: "1280px" }}>{props.children}</div>
      </div>
    </BackgroundImage>
    <Footer />
  </>
);
