import React, { useEffect, useState } from "react";
import icon from "../../static/svg/homer.svg";
import { NewestArticlesWrapper } from "./NewestArticlesWrapper";
import { backendHostname } from "../../RoutesConfig";
import { ArticleWrapper, IArticle } from "./ArticleWrapper";

interface IArticleBackendVersion {
  id: number;
  heading: string;
  insight: string;
  title_photo: string;
}

export const NewestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  const renamePhotoProperty = ({
    id,
    heading,
    insight,
    title_photo
  }: IArticleBackendVersion): IArticle => ({
    id,
    heading,
    insight,
    titlePhoto: title_photo
  });
  useEffect(() => {
    fetch(`${backendHostname}/article/newest`)
      .then(response => response.json())
      .then(response => setArticles(response.map(renamePhotoProperty)))
      .catch(error => setLoadingError(true));
  }, []);
  if (loadingError) {
    return (
      <NewestArticlesWrapper>
        <div>Server error</div>
      </NewestArticlesWrapper>
    );
  }
  if (articles.length === 0) {
    return (
      <NewestArticlesWrapper>
        <div>Loading articles...</div>
      </NewestArticlesWrapper>
    );
  }
  return (
    <NewestArticlesWrapper>
      {articles.map((article: IArticle) => (
        <ArticleWrapper key={article.id} {...article} />
      ))}
    </NewestArticlesWrapper>
  );
};
