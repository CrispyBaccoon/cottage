import * as IntLink from "next/link";

interface LinkProps {
  Name?: string;
  Ref: string;
}

const LinkStyling: string = "text-[#D19600]";

export default function Link(props: LinkProps) {
  return (
    <a
      // className="text-gray-700 underline underline-offset-1 hover:bg-slate-200"
      className={LinkStyling}
      href={props.Ref}
    >
      {props.Name ? props.Name : props.Ref}
    </a>
  );
}

export function InternalLink(props: LinkProps) {
  return (
    <IntLink.default href={props.Ref}>
      <a className={LinkStyling}>{props.Name ? props.Name : props.Ref}</a>
    </IntLink.default>
  );
}
