import React from "react";
import { Button } from "../Button";
import { Description } from "../Description";
import { Image } from "../Image";
import { Name } from "../Name";
import { Date } from "../Date";
import icon from "../../../static/svg/homer.svg";
import { Thumbnail } from "../Thumbnail";

export const ThumbnailArticle = () => (
  <Thumbnail>
    <Image icon={icon} alt="Super" className="mb-8" />
    <Date text="12. Október 2018" />
    <Name text="Nazov článku resp. novinky" className="font-lato" />
    <Description
      className="text-16 leading-22 mb-12"
      text='A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of […]'
    />
    <Button className="mb-16" text="Zobraziť článok" />
  </Thumbnail>
);
