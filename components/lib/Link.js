import React from "react";
import { Link as IntLink } from "react-router-dom";

export default function Link(props) {
  return (
    <a
      // className="text-gray-700 underline underline-offset-1 hover:bg-slate-200"
      className=" text-[#D19600]"
      href={props.Ref}
    >
      {props.Name ? props.Name : props.Ref}
    </a>
  );
}

export function InternalLink(props) {
  return (
    <IntLink to={`/${props.Ref}`}>
      <Link Ref="#" Name={props.Name ? props.Name : props.Ref} />
    </IntLink>
  );
}
