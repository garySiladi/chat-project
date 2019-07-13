import React from "react";
import { Button } from "../Button";
import { IArticle } from "../../utils/article";
import { ThumbnailArticlePreview } from "../Thumbnail/ThumbnailArticlePreview";

interface IProps {
  articles: IArticle[];
}

export const Wrapper = ({ articles }: IProps) => (
  <div className="max-w-730 my-0 mx-32 lg:mx-auto bg-white relative text-center text-black shadow-2xl">
    <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row">
      {articles.map((article: IArticle) => (
        <div key={article.id} className="flex-third mb-16">
          <ThumbnailArticlePreview
            to={`/articles/${article.id}`}
            date="99.99.2019"
            name={article.heading}
            icon={article.titlePhoto}
            alt={article.heading}
            description={article.croppedInsight}
          />
        </div>
      ))}
    </div>
    <Button className="mb-24 mt-16 text-black font-lato">Ďalšie články</Button>
  </div>
);
