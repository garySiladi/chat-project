import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackgroundImage } from "./BackgroundImage";
import { ScrollUp } from "./ScrollUp";
import { fetchCategories } from "../store/therapyCategories/actions";
import { fetchArticles } from "../store/articles/actions";
import { fetchTherapies } from "../store/therapies/actions";
import { fetchSchedule } from "../store/schedule/actions";

interface IProps {
  dispatch: ThunkDispatch<{}, {}, any>;
}

export const LayoutComponent: FC<IProps> = props => {
  useEffect(() => {
    props.dispatch(fetchCategories());
    props.dispatch(fetchTherapies());
    props.dispatch(fetchSchedule());
    props.dispatch(fetchArticles("1", "6"));
  }, []);
  return (
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
};

export const Layout = connect()(LayoutComponent);
