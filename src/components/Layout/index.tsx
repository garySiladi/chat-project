import React, { FC } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import background from "../../static/svg/backgroundImage.svg";
import { BackgroundImage } from "../Homepage/BackgroundImage";

export const Layout: FC = props => (
  <>
    <Header />
    <BackgroundImage url={background} isCover>
      <div className="flex justify-center w-full">
        <div style={{ maxWidth: "1280px" }}>{props.children}</div>
      </div>
    </BackgroundImage>
    <Footer />
  </>
);
