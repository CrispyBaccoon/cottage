import Link from "next/link";

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
            <div>{name}</div>
            <div>
              {pages.map(({ title, ref }, pageIndex) => (
                <li key={`${nameIndex}${pageIndex}`}>
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
