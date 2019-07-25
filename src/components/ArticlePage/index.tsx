import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Article } from "./Article";
import { Image } from "../Image";
import { normalizeArticleData } from "../../utils/article";
import { Button } from "../Button";
import { DescriptionAndButton } from "../Description/DescriptionAndButton";
import { DescriptionWrapper } from "../Description/DescriptionWrapper";
import { backendHostname } from "../../RoutesConfig";

interface IProps extends RouteComponentProps {
  articleId?: string;
}

const initialArticle = {
  titlePhoto: "",
  date: "",
  heading: "",
  croppedInsight: "",
  source: "",
  articleText: ""
};

export const ArticlePage = ({ articleId }: IProps) => {
  const [articleData, setArticle] = useState(initialArticle);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      fetch(`${backendHostname.dev}/articles?id=${articleId}`)
        .then(response => response.json())
        .then(response => setArticle(normalizeArticleData(response[0])))
        .catch(() => setIsError(true));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isError || isLoading) {
    return null;
  }
  return (
    <div className="p-24 max-w-960">
      <div className="bg-white shadow-2xl">
        <Image
          src={articleData.titlePhoto}
          className="flex w-full h-256 justify-center m-0 p-12"
        />
        <Article
          date={articleData.date}
          title={articleData.heading}
          subtitle={articleData.croppedInsight}
          source={articleData.source}
          text={articleData.articleText.split("\n")}
        />
      </div>
      <div className="shadow-2xl bg-white flex flex-col text-black items-center mt-24 p-16">
        <h1 className="font-gilbert font-bold text-31 w-200 mb-16">
          Komentáre
        </h1>
        <Button className="w-238 mt-16">Pridať komentár</Button>
      </div>
      <DescriptionWrapper>
        <DescriptionAndButton />
      </DescriptionWrapper>
    </div>
  );
};
