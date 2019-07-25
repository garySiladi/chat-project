import React, { FC } from "react";
import { Button } from "../Button";
import { IArticle } from "../../utils/article";
import { ThumbnailArticleNewest } from "../Thumbnail/ThumbnailArticleNewest";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { IArticlesStateType } from "../../store/articles/reducers";

export const HomepageArticlesCollectionComponent = ({
  items,
  loading,
  error
}: IArticlesStateType) => {
  const ComponentWrapper: FC = ({ children }) => (
    <div className="m-0 pl-32 pr-32 pt-48 bg-white relative text-center text-black shadow-2xl lg:pt-24 lg:m-48 lg:pl-128 lg:pr-128">
      <h1 className="font-gilbert text-31 mb-16">Najnovšie články</h1>
      <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row">
        {children}
      </div>
      <div className="mb-24 pb-24 mt-16 flex justify-center">
        <div className="w-238">
          <Button className="text-black font-lato font-black w-full">
            <Link to="/articles">Všetky články</Link>
          </Button>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return <ComponentWrapper>Loading Articles</ComponentWrapper>;
  }
  if (error) {
    return <ComponentWrapper>Articles server error</ComponentWrapper>;
  }
  return (
    <ComponentWrapper>
      {items.slice(0, 3).map((article: IArticle) => (
        <div key={article.id} className="flex-3 mt-8 lg:mt-0">
          <ThumbnailArticleNewest
            to={`/articles/${article.id}`}
            date="99.99.2019"
            name={article.heading}
            icon={article.titlePhoto}
            alt={article.heading}
            description={article.croppedInsight}
          />
        </div>
      ))}
    </ComponentWrapper>
  );
};

export const HomepageArticlesCollection = connect<IArticlesStateType>(
  (state: any) => ({
    ...state.articles
  })
)(HomepageArticlesCollectionComponent);
