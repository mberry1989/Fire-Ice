import { CallToAction } from "@/app/models";

type AppProps = {
    cta: CallToAction
    }

export const CTA = ({cta}:AppProps) => {
    return (
<div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href={cta.elements.link.linkedItems[0].elements.externalUrl.value}
                target="_blank"
                rel="noopener"
                className="px-2 py-4 text-lg font-medium text-center text-indigo-600 bg-white rounded-md ">
                {cta.elements.title.value}
              </a>
            </div>
        )
        };