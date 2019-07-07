import React from "react";
import { Article } from "./Article";
import articleImage from "../../static/svg/articleImage.png";
import { ImageHeader } from "../Header/ImageHeader";
import { BackgroundImage } from "../Homepage/BackgroundImage";

export const ArticleContainer = () => {
  const articleData = {
    src: articleImage,
    date: "20.novembra 2018 12:45",
    title: "Názov článku resp. novinky",
    subtitle:
      "Podnadpis, resp kratky popis ktory je zobrazeny aj v zozname clankov alebo na domovskej stranke",
    paragraph:
      "Byron departed from England leaving a trail of scandal over his marital conduct and since then saw himself as an exiled expatriate. Shelley was expelled from Oxford and he fell in disgrace by marrying an in-keeper’s daughter; he always struggled to reconcile his origin with his political ideas: “Shelley could find no way of resolving his own contradictory opinions” (Cronin, 2000).There is another social factor that is behind the formation of the romantic myth of the vampire. In the early nineteen century, the foundations of what would later become a mass society were laid; the expansion of the press and of the reading public produced an increased diffusion for literary works and fostered movements such as the gothic and the sensation novel. Byron himself experienced the event of being turned into a proto-bestseller. The unification of literary taste and preferences that was a correlate to this social changes could not be more alien to the romantic notion of individual gusto and original sensibility. In order to combat this unifying forces, romantic poets revered the individual who stands outside society and is free from common concerns. Many of Byron’s heros look down on the masses from above, even though they walk among them and do not lean towards wordsworthian escapades into nature; they achieve to remain untainted by the masses in a sort of exile within the world akin to that of a ghost or a dammed spirit. This self-definition of Manfred is revelatory:",
    source: "art-therapy.sk"
  };

  return (
    <BackgroundImage>
      <div className="p-24">
        <div className="bg-white">
          <ImageHeader
            src={articleData.src}
            className="flex w-full h-256 justify-center m-0 p-12"
          />
          <Article
            date={articleData.date}
            title={articleData.title}
            subtitle={articleData.subtitle}
            paragraph={articleData.paragraph}
            source="Zdroj:"
            text={articleData.source}
          />
        </div>
      </div>
    </BackgroundImage>
  );
};
