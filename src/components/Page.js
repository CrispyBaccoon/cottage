import React from "react";
import Article from "../lib/Article";
import Spacer from "../lib/Spacer";

export default function Page({ title, JSX, subtitle }) {
  return (
    <div className="w-11/12 md:w-9/12 my-6 md:my-8 mx-6 sm:mx-8 md:mx-auto font-normal">
      <header>
        <title>{title + " | Cottage"}</title>
      </header>
      <div>
        <Article TitleName={title} SubtitleName={subtitle}>
          {JSX}
          <Spacer />
        </Article>
      </div>
    </div>
  );
}
