import React, { FC } from "react";

export const DescriptionWrapper: FC = ({ children }) => {
  return (
    <div className="w-full m-auto text-center descriptionLineHeight pt-96 pb-96 pr-8 pl-8 lg:w-2/3">
      {children}
    </div>
  );
};
