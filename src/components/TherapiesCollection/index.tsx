import React, { useState } from "react";
import { connect } from "react-redux";
import { ITherapy, ITherapyCategory } from "../../utils/therapy";
import { ThumbnailTherapy } from "../Thumbnail/ThumbnailTherapy";
import { Button } from "../Button";
import { ITherapiesStateType } from "../../store/therapies/reducers";
import { ITherapyCategoriesStateType } from "../../store/therapyCategories/reducers";

interface IProps {
  therapies: ITherapiesStateType;
  categories: ITherapyCategoriesStateType;
}

export const initialTherapyCategory = { id: 999, categoryName: "Všetko" };

export const TherapiesCollectionComponent = ({
  therapies,
  categories
}: IProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialTherapyCategory.id
  );
  if (categories.loading || therapies.loading) {
    return <div>Loading data</div>;
  }
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center py-12">
        {(categories.items as ITherapyCategory[]).map(
          ({ id, categoryName }: ITherapyCategory) => (
            <Button
              isInverted={selectedCategory === id}
              key={id}
              className="m-8 text-12 rounded-full"
              onClick={() => setSelectedCategory(id)}
            >
              {categoryName}
            </Button>
          )
        )}
      </div>
      <div className="flex flex-col px-24 flex-wrap items-center justify-center lg:flex-row">
        {(therapies.items as ITherapy[]).map((therapy: ITherapy) => {
          if (
            therapy.categoryTherapy !== selectedCategory &&
            selectedCategory !== initialTherapyCategory.id
          ) {
            return null;
          }
          return (
            <div key={therapy.id} className="flex-4 mt-8 lg:mt-0">
              <ThumbnailTherapy
                to={`/therapies/${therapy.id}`}
                name={therapy.name}
                icon={therapy.titlePhoto}
                alt={therapy.name}
                description={therapy.croppedInsight}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const TherapiesCollection = connect<any, any, any>((state: any) => ({
  therapies: state.therapies,
  categories: state.categories
}))(TherapiesCollectionComponent);
