import React from "react";
import { ThumbnailArticle } from "../Thumbnail/ThumbnailArticle";
import homer from "../../static/svg/homer.svg";
import { Button } from "../Button";

export const ArticlesCollection = () => {
  const article = [
    {
      alt: "article",
      icon: homer,
      name: "Nazov článku resp. novinky",
      description:
        "A paragraph from the Greek paragraphos, to write beside written beside is a self-contained unit of […]"
    },
    {
      alt: "article",
      icon: homer,
      name: "Nazov článku resp. novinky",
      description:
        "A paragraph from the Greek paragraphos, to write beside written beside is a self-contained unit of […]"
    },
    {
      alt: "article",
      icon: homer,
      name: "Nazov článku resp. novinky",
      description:
        "A paragraph from the Greek paragraphos, to write beside written beside is a self-contained unit of […]"
    },
    {
      alt: "article",
      icon: homer,
      name: "Nazov článku resp. novinky",
      description:
        "A paragraph from the Greek paragraphos, to write beside written beside is a self-contained unit of […]"
    }
  ];
  return (
    <div className="w-full lg:w-3/4 m-auto p-40">
      <div className="bg-white flex flex-wrap">
        {article.map(({ icon, name, description, alt }) => (
          <div key={name} className="p-4 md:w-1/2 lg:w-1/3">
            <ThumbnailArticle
              date="1.1.2010"
              icon={icon}
              name={name}
              description={description}
              alt={alt}
            />
          </div>
        ))}
        <div className="w-full text-center p-24">
          <Button>Ďalšie články</Button>
        </div>
      </div>
    </div>
  );
};
