import React from "react";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import homer from "../../static/svg/homer.svg";
import { Button } from "../Button";

export const AllArticles = () => {
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
    <div className="w-4/5 lg:w-3/4 m-auto p-40">
      <div className="w-full bg-white flex flex-wrap">
        {article.map(({ icon, name, description, alt }) => (
          <div key={name} className="w-full p-4 md:w-1/2 lg:w-1/3">
            <Thumbnail
              icon={icon}
              name={name}
              description={description}
              alt={alt}
            />
          </div>
        ))}
        <div className="w-full m-auto text-center p-24">
          <Button>Ďalšie články</Button>
        </div>
      </div>
    </div>
  );
};
