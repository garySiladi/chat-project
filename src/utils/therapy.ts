interface ITherapyBackendVersion {
  id: number;
  heading: string;
  insight: string;
  cropped_insight: string;
  title_photo: string;
  category_therapy: number;
}

export interface ITherapy {
  id: number;
  name: string;
  insight: string;
  croppedInsight: string;
  titlePhoto: string;
  categoryTherapy: number;
}

export interface ITherapyCategoryBackendVersion {
  id: number;
  category_name: string;
}

export interface ITherapyCategory {
  id: number;
  categoryName: string;
}

export const normalizeTherapyCategoryData = ({
  category_name,
  ...otherData
}: ITherapyCategoryBackendVersion): ITherapyCategory =>
  Object.assign(
    {
      categoryName: category_name
    },
    otherData
  );

export const normalizeTherapyData = ({
  cropped_insight,
  title_photo,
  category_therapy,
  heading,
  ...otherData
}: ITherapyBackendVersion): ITherapy =>
  Object.assign(
    {
      croppedInsight: cropped_insight,
      titlePhoto: title_photo,
      categoryTherapy: category_therapy,
      name: heading
    },
    otherData
  );
