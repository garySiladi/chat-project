import React from "react";
import { Button } from "../Button";
import { IArticle } from "../../utils/article";
import { ThumbnailArticleNewest } from "../Thumbnail/ThumbnailArticleNewest";
import { Link } from "@reach/router";

interface IProps {
  articles: IArticle[];
}

export const Wrapper = ({ articles }: IProps) => (
  <div className="m-0 pl-32 pr-32 pt-48 bg-white relative text-center text-black shadow-2xl lg:pt-24 lg:m-48 lg:pl-128 lg:pr-128">
    <h1 className="font-gilbert text-31 mb-16">Najnovšie články</h1>
    <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row">
      {articles.map((article: IArticle) => (
        <div key={article.id} className="flex-third mt-8 lg:mt-0">
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
    </div>
    <div className="mb-24 pb-24 mt-16 flex justify-center">
      <div className="w-238">
        <Button className="text-black font-lato font-black w-full">
          <Link to="/clanky">Všetky články</Link>
        </Button>
      </div>
    </div>
  </div>
);
