interface ButtonProps {
  Name: String;
  OnClick: () => any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="min-w-[1.5rem] w-fit min-h-[1rem] h-fit px-3 py-2 bg-blue-500 text-white rounded-full"
      onClick={props.OnClick}
    >
      <div>{props.Name}</div>
    </button>
  );
}
