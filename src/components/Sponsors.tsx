import React from "react";
import { Container } from "@/components/Container";
import { Organization } from "@/app/models";
import Image from "next/image";

type AppProps = {
  goldSponsors: Organization[]
  }

export const Sponsors = ({goldSponsors}:AppProps) => {
  return (
<Container>
        <div className="flex flex-col justify-center">
          <div className="text-4xl text-center text-gray-300 dark:text-white">
            Our <span className="text-orange-300 font-bold">Gold</span>{" "}Sponsors
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10 md:justify-around text-center">
          {goldSponsors && goldSponsors.map(sponsor => {return (
            <div className="text-gray-300 py-4 bg-yellow-700 rounded" key={sponsor.system.id}>
              <a href={sponsor.elements.contact.linkedItems[0].elements.website.linkedItems[0].elements.externalUrl.value}
              target="_blank"
              rel="noopener"
              >
              <h3 className="text-2xl font-bold p-4">{sponsor.elements.name.value}</h3>
              {sponsor.elements.image.value[0] &&
              <Image
                src={sponsor.elements.image.value[0].url}
                width="110"
                height="11"
                alt={`${sponsor.elements.name.value}'s logo`}
                className="rounded-full mx-auto"
              />
              }
              </a>
            </div>
          )})}
            
          </div>
        </div>
      </Container>
  )
}