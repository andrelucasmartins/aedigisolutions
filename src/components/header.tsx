"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU } from "@/data/menu";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import ThemeSwitch from "./theme-switch";
import { Button } from "./ui/button";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [headerState, setHeaderState] = useState(false);

  const pathname = usePathname();

  const scrollHeader = () => {
    if (window.scrollY >= 80) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <header
      className={cn("bg-white text-gray-600 w-full z-40 ", {
        "fixed  bg-black/90 text-gray-50 drop-shadow-lg": headerState,
      })}
    >
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">AE Digi Solutions</h1>
        <nav className="space-x-4 hidden lg:block">
          {MENU.map((item) => (
            <Link
              className={
                pathname === item.url
                  ? "text-gray-600 hover:text-opacity-75"
                  : "text-gray-400 hover:text-opacity-75"
              }
              href={item.url}
              key={item.id}
              >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-row gap-4 justify-between items-center">
          <ThemeSwitch />

          <Button className="hidden sm:block">faça um orçamento</Button>
          <div className="visible lg:hidden">
            <Sheet>
              <SheetTrigger>
                <FaBars size={24} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="flex justify-start items-start">
                  <SheetTitle>AE DIGI SOLUTIONS</SheetTitle>
                  <SheetDescription>
                    <nav className="space-y-4 flex flex-col mt-4 justify-start items-start">
                      {MENU.map((item) => (
                        <Link
                          className={
                            pathname === item.url
                              ? "text-gray-600 hover:text-opacity-75"
                              : "text-gray-400 hover:text-opacity-75"
                          }
                          href={item.url}
                          key={item.id}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};
