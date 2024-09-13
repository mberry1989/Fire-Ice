import Image from "next/image";
import { Container } from "../components/Container";
import { CTA } from "../components/Cta";
import { CallToAction, Event, Link } from "@/app/models";

type AppProps = {
  event: Event,
  ctas: CallToAction[]
  logo: Link
  }

export const Hero = ({event, ctas, logo}:AppProps) => {
  const buyCTA = ctas.filter(item  => item.system.codename == 'get_your_tickets')[0]
  const sponsorCTA = ctas.filter(item  => item.system.codename == 'become_a_sponsor')[0]
  const eventImage = event.elements.image.value[0]
  return (
    <>
      <Container className="flex flex-wrap">
      <div className="flex items-center justify-center w-full">
          <div>
            <Image
              src={eventImage.url}
              width={eventImage.width as number}
              height={eventImage.height as number}
              alt='Fire and Ice Imbolc Family Formal Dance banner'
              loading="eager"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2 lg:absolute">
          <div className="max-w-2xl mb-8 lg:px-32">
            <div className="lg:bg-gray-500 lg:bg-opacity-95 m-2 lg:p-4 rounded items-center lg:mt-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight lg:text-gray-200 lg:text-center lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              {event.elements.title.value}
            </h1>
            <p className="py-6 text-xl leading-normal text-gray-300 lg:text-gray-200 lg:text-lg xl:text-xl">
              {event.elements.summary.value}
            </p>
            
            <div className="flex items-center justify-center gap-4 ">
              <CTA cta={buyCTA}/>
              <CTA cta={sponsorCTA}/>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}



