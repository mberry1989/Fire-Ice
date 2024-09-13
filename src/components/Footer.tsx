import Link from "next/link";
import React from "react";
import { Container } from "../components/Container";
import { Organization } from "@/app/models";

interface AppProps {
  organizers: Organization[]
}

export function Footer({organizers}:AppProps) {
  const ecsg = organizers.filter(item => item.system.codename === 'earth_centered_spirituality_group')[0]
  const ecsgWebsite = ecsg.elements.contact.linkedItems[0].elements.website.linkedItems[0].elements.externalUrl.value

  const uuChurch = organizers.filter(item => item.system.codename === 'unitarian_universalist_church_of_concord')[0]
  const uuChurchWebsite = uuChurch.elements.contact.linkedItems[0].elements.website.linkedItems[0].elements.externalUrl.value
  return (
      <Container>
      <div className="dark:border-trueGray-700">
        {/* ECSG contact start */}
        <div
        className="text-left px-8 space-x-2 text-2xl font-medium text-orange-300 dark:text-gray-100">
          {ecsg.elements.name.value}
        
        <div>
        <Link
          href={ecsgWebsite}
          className="font-medium text-lg text-left text-indigo-300 dark:text-gray-100"
        >
          <span>Website: {ecsgWebsite}</span>
        </Link>
        </div>
        <div>
        <Link
          href={`mailto:${ecsg.elements.contact.linkedItems[0].elements.email.value}`}
          className="font-medium text-lg text-left text-indigo-300 dark:text-gray-100"
        >
          <span>Email: {ecsg.elements.contact.linkedItems[0].elements.email.value}</span>
        </Link>
        </div>
        {ecsg.elements.contact.linkedItems[0].elements.facebook.value &&
        <div className="flex space-x-5 text-gray-400 dark:text-gray-500">
          <a
            href={ecsg.elements.contact.linkedItems[0].elements.facebook.value}
            target="_blank"
            rel="noopener"
          >
            <div className="w-full flex justify-center gap-2 mt-2 text-indigo-300">
            <Facebook />
            Follow us on Facebook
            </div>
          </a>
        </div>
}
        </div>

        {/* UU Contact Start */}
        <div
        className="text-left px-8 py-8 space-x-2 text-2xl font-medium text-orange-300 dark:text-gray-100">
          {uuChurch.elements.name.value}
        
        <div>
        <Link
          href={uuChurchWebsite}
          className="font-medium text-lg text-left text-indigo-300 dark:text-gray-100"
        >
          <span>Website: {uuChurchWebsite}</span>
        </Link>
        </div>
        <div>
        <Link
          href={`mailto:${uuChurch.elements.contact.linkedItems[0].elements.email.value}`}
          className="font-medium text-lg text-left text-indigo-300 dark:text-gray-100"
        >
          <span>Email: {uuChurch.elements.contact.linkedItems[0].elements.email.value}</span>
        </Link>
        </div>
        {uuChurch.elements.contact.linkedItems[0].elements.facebook.value && 
        <div className="flex space-x-5 text-gray-400 dark:text-gray-500">
          <a
            href={uuChurch.elements.contact.linkedItems[0].elements.facebook.value}
            target="_blank"
            rel="noopener"
          >
            <div className="w-full flex justify-center gap-2 mt-2 text-indigo-300">
            <Facebook />
            Follow us on Facebook
            </div>
          </a>
        </div>
        }
        </div>
      </div>

      <div className="mt-5">
        <a
          href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
          target="_blank"
          rel="noopener"
          className="relative block w-44"
        >
        </a>
      </div>
    <div>
      </div>
        <div className="text-sm text-center text-orange-300 dark:text-gray-400 mt-10 bottom-0">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" Michael Berry"}
        </div>

        <span className="text-sm w-full">NextJS template provided by: </span>
      {/* Do not remove this */}
      <Backlink />
      </Container>
  );
}



const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      {/* <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg> */}

      <span>Web3Templates</span>
    </a>
  );
};
