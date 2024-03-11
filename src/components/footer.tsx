"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaX
} from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-flow-col auto-cols-max justify-between items-center py-20 max-w-7xl lg:mx-auto gap-4 mx-4">
        <p className="text-3xl font-bold col-span-1 max-w-[300px]">
          Se inscreva para receber novidades
        </p>
        <form className="flex dark col-span-11">
          <Input
            placeholder="Digite o seu nome"
            type="text"
            className="rounded-none bg-black border-white h-16 text-xl"
          />
          <Input
            placeholder="Digite seu e-mail"
            type="email"
            className="rounded-none bg-black border-white h-16 text-xl"
          />
          <Button className="rounded-none h-16 text-xl">Quero receber</Button>
        </form>
      </div>
      <div className="bg-white text-black px-4">
        <div className="grid grid-flow-row auto-rows-max sm:grid-flow-col sm:auto-cols-max justify-center  sm:justify-between items-center py-4 max-w-7xl md:mx-auto ">
          <p className="text-center mt-4 md:self-end">
            © {new Date().getFullYear()} AE Digi Solutions. All rights reserved
          </p>
          <div className="flex flex-col justify-center space-x-4 mt-4 items-center sm::items-end">
            <nav className="flex flex-row gap-2">
              <Link
                href={
                  "https://wa.me/5519993028888?text=Olá%20como%20posso%20te%20ajudar?%20Somos%20AE%20Digi%20Solutions%20especialistas%20em%20desenvolvimento%20de%20Landing%20Pages,%20websites%20sistemas%20para%20aplicações%20web,%20Aplicativos."
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={24} />
              </Link>

              <Link href={"https://www.linkedin.com/in/andreezequiel/"}>
                <FaLinkedin size={24} />
              </Link>

              <Link href="#">
                <FaFacebook size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaX size={24} />
              </Link>
            </nav>
            <p className="text-center mt-4">Desenvolvido por: André Ezequiel</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
