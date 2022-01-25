import Link from "next/link";
import { Header } from "./lib/Header.tsx";
import Spacer from "./lib/Spacer.tsx";

interface NavigationBarProps {
  Items: {
    name: string;
    pages: {
      title: string;
      ref: string;
    }[];
  }[];
}

export default function NavigationBar(props: NavigationBarProps) {
  return (
    <div className="mt-6 md:mt-8 mx-5 md:mx-8 my-5 md:my-4">
      <ul className="list-none">
        {props.Items.map(({ name, pages }, nameIndex) => (
          <div key={`${nameIndex}`}>
            <Spacer />
            <Header>{name}</Header>
            <div>
              {pages.map(({ title, ref }, pageIndex) => (
                <li key={`${nameIndex}${pageIndex}`} className="my-2">
                  <Link href={ref}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
