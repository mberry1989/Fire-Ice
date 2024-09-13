import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container p-4 mx-auto xl:px-0 bg-darkPurple text-gray-200 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

