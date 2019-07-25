import React, { FC } from "react";
import { connect } from "react-redux";
import { IArticlesStateType } from "../../store/articles/reducers";
import { Button } from "../Button";
import { IArticle } from "../../utils/article";
import { ThumbnailArticlePreview } from "../Thumbnail/ThumbnailArticlePreview";

export const ArticlepageArticlesCollectionComponent = ({
  items,
  loading,
  error
}: IArticlesStateType) => {
  const ComponentWrapper: FC = ({ children }) => (
    <div className="max-w-730 my-0 mx-32 lg:mx-auto bg-white relative text-center text-black shadow-2xl">
      <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row">
        {children}
      </div>
      <Button className="mb-24 mt-16 text-black font-lato">
        Ďalšie články
      </Button>
    </div>
  );
  if (loading) {
    return <ComponentWrapper>Loading Articles</ComponentWrapper>;
  }
  if (error) {
    return <ComponentWrapper>Articles server error</ComponentWrapper>;
  }
  const content = (items as IArticle[]).map((article: any) => (
    <div key={article.id} className="flex-3 mb-16">
      <ThumbnailArticlePreview
        to={`/articles/${article.id}`}
        date="99.99.2019"
        name={article.heading}
        icon={article.titlePhoto}
        alt={article.heading}
        description={article.croppedInsight}
      />
    </div>
  ));
  return <ComponentWrapper>{content}</ComponentWrapper>;
};

export const ArticlepageArticlesCollection = connect<IArticlesStateType>(
  (state: any) => ({
    ...state.articles
  })
)(ArticlepageArticlesCollectionComponent);
