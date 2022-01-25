import * as link from "next/link";

interface LinkProps {
  Name?: string;
  Ref: string;
}

export default function Link(props: LinkProps) {
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

export function InternalLink(props: LinkProps) {
  return (
    <link ref={`/${props.Ref}`}>
      <Link Ref="#" Name={props.Name ? props.Name : props.Ref} />
    </link>
  );
}
