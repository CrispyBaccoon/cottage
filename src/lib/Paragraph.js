import React from "react";

export default function Paragraph(props) {
  return (
    <p className="font-serif text-xl sm:text-lg text-[#4F321C] my-2">
      {props.children}
    </p>
  );
}
