import Image from "next/image";
import React from "react";
import { Container } from "../components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import { Person, Testimonial } from "@/app/models";
import { RichTextElement } from "./RichTextElement";

type AppProps = {
  testimonial: Testimonial
  person: Person
  }

export const TestimonialCard = ({testimonial, person}: AppProps) => {
  return (
    <Container>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-trueGray-600 bg-opacity-65 px-4 rounded-2xl py-14">
            <span className="text-lg leading-normal ">
              <RichTextElement element={testimonial.elements.quote} isInsideTable={false}/>
            </span>

            <Avatar
              image={person.elements.image.value[0].url}
              name={`${person.elements.firstName.value} ${person.elements.lastName.value}`}
              title=""
            />
          </div>
        </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8" >
      <div className="flex-shrink-0 rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="80"
          height="80"
          alt="Avatar"
          className="rounded-full overflow-hidden p-1"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
