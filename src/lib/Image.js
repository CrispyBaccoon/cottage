import React from "react";

export default function Image(props) {
  return (
    <div className="relative w-11/12 my-5 md:my-8 mx-auto shadow-black shadow-sm">
      <a href={props.Source} className="">
        <div className="imageCover absolute w-full h-full flex justify-center items-center bg-transparent hover:backdrop-blur-md hover:bg-white/30">
          <div className="invisible text-black font-semibold text-xl">
            {props.children}
          </div>
        </div>
        <img src={props.Source} alt={props.children} className="w-full" />
      </a>
    </div>
  );
}
