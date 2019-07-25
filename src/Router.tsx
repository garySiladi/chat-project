import { Router, Location, RouteComponentProps } from "@reach/router";
import React, { useEffect, FC } from "react";
import { Layout } from "./components/Layout";
import { scrollToTop } from "./utils/window";
import { HomePage } from "./components/HomePage";
import { ArticlesCollectionPage } from "./components/ArticlesCollectionPage";
import { ArticlePage } from "./components/ArticlePage";
import { TherapiesCollectionPage } from "./components/TherapiesCollectionPage";
import { ScheduleCollectionPage } from "./components/ScheduleCollectionPage";

const ScrollToTop: FC<RouteComponentProps> = ({ children, location }) => {
  const { pathname } = location || { pathname: "/" };
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return <>{children}</>;
};

// tslint:disable-next-line:no-default-export
export default () => (
  <Layout>
    <Location>
      {({ location }) => (
        <ScrollToTop location={location}>
          <Router>
            <HomePage path="/" />
            <ArticlesCollectionPage path="articles" />
            <TherapiesCollectionPage path="therapies" />
            <ScheduleCollectionPage path="schedule/*" />
            <ArticlePage path="articles/:articleId" />
          </Router>
        </ScrollToTop>
      )}
    </Location>
  </Layout>
);
