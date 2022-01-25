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
    <div className="w-11/12 md:w-9/12 my-6 md:my-8 mx-6 sm:mx-8 md:mx-auto font-normal">
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
