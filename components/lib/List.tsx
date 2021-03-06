import { ReactChild } from "react";

interface ListProps {
  Items: ReactChild[];
}

export default function List(props: ListProps) {
  var date = new Date();
  var randString = date.toISOString();
  return (
    <ul className="list-disc ml-10">
      {props.Items.map((item, index) => (
        <li
          key={randString + index}
          className="my-1 md:my-2 text-lg sm:text-base font-serif"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
