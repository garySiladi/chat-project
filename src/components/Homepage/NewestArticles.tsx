import React, { useEffect, useState } from "react";
import icon from "../../static/svg/homer.svg";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { Button } from "../Button";

interface IArticle {
  id: number;
  heading: string;
  insight: string;
  title_photo: string;
}

export const NewestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    fetch("http://localhost/api/article/newest")
      .then(response => response.json())
      .then(response => setArticles(response))
      .catch(error => setLoadingError(true));
  }, []);
  return (
    <div className="m-0 bg-white relative pt-48 lg:pt-24 lg:m-48 text-center pl-32 pr-32 lg:pl-128 lg:pr-128 shadow">
      <h1 className="font-gilbert text-31 mb-16">Najnovšie články</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {articles.length === 0 ? (
          loadingError ? (
            <div>Server error</div>
          ) : (
            <div>Loading articles...</div>
          )
        ) : (
          articles.map((article: IArticle) => (
            <div
              style={{ height: "408px" }}
              key={article.id}
              className="w-238 ml-0 mt-8 lg:mt-0 lg:ml-8"
            >
              <Thumbnail
                name={article.heading}
                icon={
                  "http://localhost/api/image/214/160/" + article.title_photo
                }
                alt="super"
                description={article.insight}
              />
            </div>
          ))
        )}
      </div>
      <div className="mb-24 pb-24 mt-16 flex justify-center">
        <div className="w-238">
          <Button className="text-black font-lato font-black w-full">
            Všetky články
          </Button>
        </div>
      </div>
    </div>
  );
};
