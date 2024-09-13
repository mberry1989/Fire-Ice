import React from "react";
import { Container } from "../components/Container";
import { CallToAction } from "../app/models";

interface AppProps {
  cta: CallToAction
  };

export const Callout = ({cta}:AppProps) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 text-white bg-trueGray-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-orange-300">
            {cta.elements.title.value}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {cta.elements.subtitle.value}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto ">
          <a
            href={cta.elements.link.linkedItems[0].elements.externalUrl.value}
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            {cta.elements.actionLabel.value}
          </a>
        </div>
      </div>
    </Container>
  );
};
