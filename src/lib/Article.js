import React from "react";
import { SubTitle, Title } from "./Header";

export default function Article({ children, TitleName, SubtitleName }) {
  return (
    <div>
      <Title> {TitleName} </Title>
      {SubtitleName ? <SubTitle> {SubtitleName} </SubTitle> : ""}
      <article>{children}</article>
    </div>
  );
}
