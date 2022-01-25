import { ReactChild } from "react";

interface ParagraphProps {
  children: ReactChild | ReactChild[];
}

export default function Paragraph(props: ParagraphProps) {
  return (
    <p className="font-serif text-xl sm:text-lg text-[#4F321C] my-2">
      {props.children}
    </p>
  );
}
