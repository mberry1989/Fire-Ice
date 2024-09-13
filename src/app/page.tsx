import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { BenefitLevel } from "@/components/Benefits";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Faq } from "@/components/Faq";
import { Callout } from "@/components/Callout";
import { getItemByCodename, getItemsContainingTerms, getItemsOfType } from "@/services/kontentClient";
import { Benefits, CallToAction, Event, Testimonial, Link as KaiLink, Organization, FAQGroup } from "./models";
import  { RichTextElement } from "@/components/RichTextElement";
import { Sponsors } from "@/components/Sponsors";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const event = await getEventData()
  const ctas = await getCTAs()
  const benefits = await getBenefits()
  const testimonials = await getTestimonials()
  const logo = await getLogo()
  const goldSponsors = await getGoldSponsors()
  const organizers = event.elements.organizer.linkedItems

  const gold = benefits.filter(item => item.system.codename === 'gold_level')[0]
  const silver = benefits.filter(item => item.system.codename === 'silver_level')[0]
  const bronze = benefits.filter(item => item.system.codename === 'bronze_level')[0]

  const faqs = await getFAQs()

  const becomeASponsor = ctas.filter(cta => cta.system.codename === 'become_a_sponsor')[0]

  return (
    <div className="w-full bg-darkPurple">
    <Container>
      <Hero event={event} ctas={ctas} logo={logo}/>

      <Sponsors goldSponsors={goldSponsors}/>

      <SectionTitle
        preTitle="Why join us?"
        title="Warmth & Welcoming"
      >
      </SectionTitle>

      <Container className="w-full lg:w-11/12">
        <RichTextElement element={event.elements.description} isInsideTable={false}/>
      </Container>

      <SectionTitle
        preTitle="Why sponsor us?"
        title="Sponsor Benefits"
      >
      </SectionTitle>

    <Container className="lg:grid lg:grid-cols-3">
    <Container className="bg-orange-900 rounded">
      <Image
                src="https://assets-us-01.kc-usercontent.com/25ff2e06-dd4d-00f9-ef92-33646358c177/7510ff54-a282-4c57-b92e-b6006e91343a/DALL%C2%B7E%202024-07-29%2016.15.57%20-%20Create%20a%20flat%20badge%20for%20a%20Bronze%20Sponsor%20of%20the%20Fire%20%26%20Ice%20Formal%202025%20with%20the%20theme%20of%20Imbolc%2C%20a%20pagan%20festival.%20The%20badge%20should%20feature%20a%20warm%20bro.webp"
                width="300"
                height="300"
                alt="bronze sponsor badge"
                className="lg:p-20 rounded-full w-full"
              />
      <BenefitLevel benefit={bronze} />
        
      </Container>
      
      <Container className="bg-indigo-900 rounded">
      <Image
                src="https://assets-us-01.kc-usercontent.com/25ff2e06-dd4d-00f9-ef92-33646358c177/4810b23c-a816-4b22-8d6f-d27b9e01092c/DALL%C2%B7E%202024-07-29%2015.58.36%20-%20Create%20a%20flat%20badge%20for%20a%20Silver%20Sponsor%20of%20the%20Fire%20%26%20Ice%20Formal%202025%20with%20the%20theme%20of%20Imbolc%2C%20a%20pagan%20festival.%20The%20badge%20should%20feature%20a%20cool%20sil.webp"
                width="300"
                height="300"
                alt="silver sponsor badge"
                className="lg:p-20 rounded-full w-full h-auto"
              />
        <BenefitLevel benefit={silver} />
      </Container>

      <Container className="bg-yellow-700 rounded">
      <Image
              src={gold.elements.image.value[0].url}
              width="300"
              height="300"
              alt="gold sponsor badge"
              className="lg:p-20 rounded-full w-full"
            />
      <BenefitLevel benefit={gold} />
    </Container>
    </Container>

    <Callout cta={becomeASponsor}/>

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what attendees said about last year's dance"
      >
      </SectionTitle>
      <div className="lg:flex lg:grid lg:gap-10 lg:grid-cols-3">
        {testimonials && testimonials.map(item => {return (
          <TestimonialCard 
            testimonial={item} 
            person={item.elements.person.linkedItems[0]} 
            key={item.system.id}/>)
          })}
      </div>
      <SectionTitle preTitle={faqs.elements.subtitle.value} 
        title={faqs.elements.title.value}>
        <RichTextElement element={faqs.elements.desription} isInsideTable={false} />
      </SectionTitle>

      <Faq faqs={faqs}/>

      <SectionTitle
        preTitle="Contact Us"
        title="More questions? Reach out!"
      >
        <Footer organizers={organizers}/>
      </SectionTitle>

    </Container>
    </div>
  );
}

async function getEventData(){
  const event = await getItemByCodename<Event>('fire___ice_2025', 5)
  return event
}

async function getCTAs() {
  const ctas = await getItemsOfType<CallToAction>('call_to_action', 5)
  return ctas
}

async function getBenefits() {
  const benefits = await getItemsOfType<Benefits>('benefits', 5)
  return benefits
}

async function getTestimonials() {
  const testimonials = await getItemsOfType<Testimonial>('testimonial', 5)
  return testimonials
}

async function getLogo() {
  const logo = await getItemByCodename<KaiLink>('logo', 5)
  return logo
}

async function getGoldSponsors() {
  const goldSponsors = await getItemsContainingTerms<Organization>('elements.organization_type',['gold'], 4)
  return goldSponsors
}

async function getFAQs() {
  const faqs = await getItemByCodename<FAQGroup>('faqs', 5)
  return faqs
}

//Metadata
export const generateMetadata = async (
): Promise<Metadata> => {
  const eventMeta = await getEventData()
  return {
    title: eventMeta.elements.metadataMetaTitle.value,
    description: eventMeta.elements.metadataMetaDescription.value,
    keywords:eventMeta.elements.metadataMetaKeywords.value
  };
};