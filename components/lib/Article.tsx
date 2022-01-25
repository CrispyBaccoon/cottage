import { ReactChild } from "react";
import { SubTitle, Title } from "./Header";

interface ArticleProps {
  children: ReactChild;
  TitleName: Element;
  SubtitleName: Element;
}

export default function Article(props: ArticleProps) {
  return (
    <div>
      <Title> {props.TitleName} </Title>
      {props.SubtitleName ? <SubTitle> {props.SubtitleName} </SubTitle> : ""}
      <article>{props.children}</article>
    </div>
  );
}
