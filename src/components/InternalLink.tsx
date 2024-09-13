import { ILink } from "@kontent-ai/delivery-sdk";
import { FC, ReactNode } from "react";


//TODO: use Link content type instead of the default internal linking

type Props = Readonly<{
  link: ILink;
  children: ReactNode;
}>;

export const InternalLink: FC<Props> = props => {
  switch (props.link.type) {
    case "link":
      return (
        <a href={props.link.urlSlug}>{props.children}</a>
      );
    default:
      //throw new Error(`Cannot render an internal link of type ${props.link.type}. Please make sure all types you want to link are supported in the app.`);
      console.log('need to implement links')
      console.log(props.children)
      return null
  }
}