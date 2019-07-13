import React, { useEffect, useState, FC } from "react";
import { backendHostname } from "../../RoutesConfig";
import { normalizeArticleData } from "../../utils/article";

interface IProps {
  page?: string;
  limit?: string;
  children: (articles: any) => any;
}

export const ArticlesCollection: FC<IProps> = ({
  children,
  page = "1",
  limit = "10"
}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      fetch(`http://localhost:3000/articles?_page=${page}&_limit=${limit}`)
        .then(response => response.json())
        .then(response => setArticles(response.map(normalizeArticleData)))
        .catch(() => setIsError(true));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isError) {
    return <div>Server error</div>;
  }

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  return children(articles);
};
