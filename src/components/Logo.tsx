import Link from "next/link"
import Image from "next/image";
import { Link as KaiLink } from "@/app/models";


type AppProps = {
    logo: KaiLink
    }

export const Logo = ({logo}:AppProps) => {
    const icon = logo.elements.icon.value[0]
    return (
<Link href="/">
  <span>
    <Image
      src={icon.url}
      alt="N"
      width={icon.width as number} 
      height={icon.height as number}
      className="w-1/3 float-left px-2 py-8"
    />
  </span>
</Link>
        )
        };