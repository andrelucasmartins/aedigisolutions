"use client"

import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

import { Button } from "./ui/button";

interface FooterProps {
}

export const Footer = ({...props}: FooterProps) => {
 return (
   <footer className="container flex md:py-0 w-full flex-col" {...props}>
     <div className="flex items-center mx-auto flex-col">
       <div className="w-full gap-x-2 flex-row flex items-center justify-center">
         <Button
           className="rounded-full"
           size="icon"
           variant="outline"
           name="Whatsapp"
           asChild
         >
           <Link
             href={
               "https://wa.me/5519993028888?text=Olá%20como%20posso%20te%20ajudar?%20Somos%20AE%20Digi%20Solutions%20especialistas%20em%20desenvolvimento%20de%20Landing%20Pages,%20websites%20sistemas%20para%20aplicações%20web,%20Aplicativos."            
             }
             target="_blank"
             rel="noreferrer"
           >
             <FaWhatsapp className="size-5" />
           </Link>
         </Button>
         <Button
           className="rounded-full"
           size="icon"
           variant="outline"
           name="Linkedin"
           asChild
         >
           <Link href={"https://www.linkedin.com/in/andreezequiel/"}>
             <FaLinkedinIn className="size-5" />
           </Link>
         </Button>
       </div>
       <p className="w-full text-balance text-center text-sm leading-loose text-muted-foreground md:text-left py-5">
         <Link href="/" rel="noreferrer" className="font-medium ">
           &copy; {new Date().getFullYear()} AE Digi Solutions{" "}
         </Link>
         . Todos direitos reservados
       </p>
     </div>
   </footer>
 );
};
