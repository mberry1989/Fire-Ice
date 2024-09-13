import React from "react";
import { Benefits } from "@/app/models";
import { RichTextElement } from "./RichTextElement";

interface AppProps {
  benefit: Benefits
  };

export const BenefitLevel = ({benefit}:AppProps) => {
  return (
        <div
          className={`flex flex-wrap items-center w-full`}>
          <div>
            <div className="flex flex-col p-4">
              <h3 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight text-gray-300 lg:leading-tight lg:text-3xl">
                {benefit.elements.title.value}
              </h3>
              <h4 className="text-xl">
                {benefit.elements.donationRange.value}
              </h4>

              <div className="max-w-2xl text-lg leading-normal text-gray-300 lg:text-xl xl:text-xl dark:text-gray-300 list-style-type:disc w-full">
                {benefit.elements.relatedBenefits.linkedItems[0] &&
                <span>All the benefits of {benefit.elements.relatedBenefits.linkedItems[0].elements.title.value} and...</span>
                }
                <RichTextElement element={benefit.elements.description} isInsideTable={false} />
              </div>
            </div>
          </div>
        </div>
  );
};
