import React from "react";

export function Title(props) {
  return (
    <div className="mx-auto w-fit font-semibold text-[#4F321C] text-3xl sm:text-4xl mb-6 md:mb-6">
      {props.children}
    </div>
  );
}

export function SubTitle(props) {
  return (
    <div className="max-x-auto w-10/12 font-normal text-center text-[#8C704F] text-lg sm:text-xl mb-6 md:mb-6">
      {props.children}
    </div>
  );
}

export function MainHeader(props) {
  return (
    <div className="font-semibold text-[#4F321C] text-3xl sm:text-2xl my-4">
      {props.children}
    </div>
  );
}

export function Header(props) {
  return (
    <div className="font-semibold text-[#4F321C] text-2xl sm:text-xl my-4">
      {props.children}
    </div>
  );
}
