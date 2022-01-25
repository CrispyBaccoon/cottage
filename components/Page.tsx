import Head from "next/head";
import Article from "./lib/Article";
import Spacer from "./lib/Spacer";

interface PageProps {
  title: string;
  subtitle: string;
  Body: JSX.Element;
}

export default function Page(props: PageProps) {
  return (
    <div>
      <Head>
        <title>{props.title + " | Cottage"}</title>
      </Head>
      <div>
        <Article TitleName={props.title} SubtitleName={props.subtitle}>
          {props.Body}
          <Spacer />
        </Article>
      </div>
    </div>
  );
}
