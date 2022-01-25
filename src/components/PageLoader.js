import { useParams } from "react-router";
import { Categories } from "../data/CategoryData";
import { Pages } from "../data/PageData";
import React from "react";

export const PageLoader = () => {
  let { CatId, PageId } = useParams();
  return (
    <div>
      {Pages.map((page) => {
        return page.url === PageId
          ? Categories.filter((cat) => cat.PageName === page.Category)[0]
              .url === CatId
            ? page.Page
            : null
          : null;
      })}
    </div>
  );
};
