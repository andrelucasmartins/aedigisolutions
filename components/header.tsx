'use client'

import Link from "next/link";

interface HeaderProps {
}

const menu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Sobre",
      path: "/sobre",
    },
    {
      label: "Contato",
      path: "/contato",
    },
  ]

export const Header = ({...props}: HeaderProps) => {
 return (
   <header
     {...props}
     className="flex w-full  bg-black/5 fixed py-5"
   >
     <div className="flex justify-between items-center gap-2 container">
       <div
         data-radix-scroll-area-viewport=""
         className="h-full w-full rounded-[inherit] overflow-auto"
       >
         <div className="min-w-full table">
           <div className="mb-4 flex items-center">
             {menu.map((item) => (
               <Link
                 key={item.path}
                 href={item.path}
                 className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary"
               >
                 {item.label}
               </Link>
             ))}
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary"
               href="/examples/mail"
             >
               Mail
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/dashboard"
             >
               Dashboard
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/cards"
             >
               Cards
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/tasks"
             >
               Tasks
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/playground"
             >
               Playground
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/forms"
             >
               Forms
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/music"
             >
               Music
             </a>
             <a
               className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
               href="/examples/authentication"
             >
               Authentication
             </a>
           </div>
         </div>
       </div>
     </div>
   </header>
 );
};
