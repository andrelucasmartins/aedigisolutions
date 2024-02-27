"use client"

import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { Button } from "./ui/button";

interface FooterProps {
}

export const Footer = ({...props}: FooterProps) => {
 return (
   <footer className="container flex md:py-0 w-full flex-col" {...props}>
     <div className="flex items-center mx-auto flex-col">
       <div className="w-full gap-x-2 flex-row flex items-center justify-center">
         <Button className="rounded-full" size="icon" variant="outline">
           <FaFacebook className="w-4 h-4" />
         </Button>
         <Button className="rounded-full" size="icon" variant="outline">
           <FaLinkedin className="w-4 h-4" />
         </Button>
         <Button className="rounded-full" size="icon" variant="outline">
           <LuFacebook className="w-4 h-4" />
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
