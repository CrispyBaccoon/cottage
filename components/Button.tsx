import styles from "./Button.module.scss";

interface ButtonProps {
  Name: String;
  OnClick: () => any;
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.OnClick}>
      <div>{props.Name}</div>
    </button>
  );
}
