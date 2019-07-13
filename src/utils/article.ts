interface IArticleBackendVersion {
  id: number;
  heading: string;
  insight: string;
  source: string;
  date_of_adding: string;
  cropped_insight: string;
  title_photo: string;
  article_text: string;
}

export interface IArticle {
  id: number;
  heading: string;
  insight: string;
  source: string;
  date: string;
  croppedInsight: string;
  titlePhoto: string;
  articleText: string;
}

export const normalizeArticleData = ({
  article_text,
  cropped_insight,
  title_photo,
  date_of_adding,
  ...otherData
}: IArticleBackendVersion): IArticle =>
  Object.assign(
    {
      croppedInsight: cropped_insight,
      titlePhoto: title_photo,
      articleText: article_text,
      date: date_of_adding
    },
    otherData
  );
