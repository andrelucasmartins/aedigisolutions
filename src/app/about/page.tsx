/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yV6y6smAhaQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div >
   
      <section className="container mx-auto px-4 py-12 items-center">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold">
              RUFEN SIE UNS AN UNVERBINDLICH INFORMIEREN
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form className="mt-6 space-y-4">
              <Input placeholder="Ihr Name" type="text" />
              <Input placeholder="Ihre E-Mail" type="email" />
              <Button className="w-full">Senden</Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <img
              alt="Beratung"
              className="w-full h-auto"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>SEO</CardTitle>
                <CardDescription>Ab dem ersten Klick</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="SEO"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>DIGITAL MARKETING</CardTitle>
                <CardDescription>Digitale Kompetenz</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Digital Marketing"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>WEB DESIGN</CardTitle>
                <CardDescription>Responsive & Modern</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Web Design"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center">Über SEO Agentur</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <SearchIcon className="text-[#003366] h-12 w-12" />
            <p className="mt-2 text-center">SEO Optimiert</p>
          </div>
          <div className="flex flex-col items-center">
            <UserIcon className="text-[#003366] h-12 w-12" />
            <p className="mt-2 text-center">Individuell</p>
          </div>
          <div className="flex flex-col items-center">
            <ActivityIcon className="text-[#003366] h-12 w-12" />
            <p className="mt-2 text-center">Erfahrung</p>
          </div>
          <div className="flex flex-col items-center">
            <HelpingHandIcon className="text-[#003366] h-12 w-12" />
            <p className="mt-2 text-center">Individuelle Betreuung</p>
          </div>
        </div>
      </section>
      <section className="bg-[#003366] text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">
            Unsere Leistungen
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <SearchIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Analyse</p>
            </div>
            <div className="flex flex-col items-center">
              <GoalIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Strategie</p>
            </div>
            <div className="flex flex-col items-center">
              <OptionIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Optimierung</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <img
              alt="Team"
              className="w-full h-auto"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold">
              SEO Agentur für Ihr Unternehmen
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6">
              <Button className="bg-[#00adee] text-white">Mehr erfahren</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">
            Projektablauf bei unserer Suchmaschinenoptimierung Agentur
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <SearchIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Analyse</p>
            </div>
            <div className="flex flex-col items-center">
              <GoalIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Strategie</p>
            </div>
            <div className="flex flex-col items-center">
              <OptionIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Optimierung</p>
            </div>
            <div className="flex flex-col items-center">
              <ViewIcon className="h-12 w-12" />
              <p className="mt-2 text-center">Reporting</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center">
          Häufig Gestellte Fragen
        </h2>
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white shadow-sm">
            <h3 className="font-semibold">Was ist SEO?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="p-4 bg-white shadow-sm">
            <h3 className="font-semibold">Wie verbessere ich mein Ranking?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="p-4 bg-white shadow-sm">
            <h3 className="font-semibold">Was kostet SEO?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#003366] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
              <h3 className="text-xl font-semibold">Kontakt</h3>
              <p className="mt-2">12345 Musterstadt, Musterstraße 1</p>
              <p className="mt-1">Tel: 0123 456789</p>
              <p className="mt-1">Fax: 0123 456789-0</p>
              <p className="mt-1">E-Mail: info@beispiel.de</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Navigation</h3>
              <nav className="mt-2 space-y-1">
                <Link className="text-white hover:text-opacity-75" href="#">
                  Startseite
                </Link>
                <Link className="text-white hover:text-opacity-75" href="#">
                  Über uns
                </Link>
                <Link className="text-white hover:text-opacity-75" href="#">
                  Dienstleistungen
                </Link>
                <Link className="text-white hover:text-opacity-75" href="#">
                  Referenzen
                </Link>
                <Link className="text-white hover:text-opacity-75" href="#">
                  Kontakt
                </Link>
              </nav>
            </div>
            <div className="flex space-x-4">
              <img
                alt="Partner Logo 1"
                className="h-10 w-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <img
                alt="Partner Logo 2"
                className="h-10 w-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <img
                alt="Partner Logo 3"
                className="h-10 w-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function GoalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
      <path d="M8 10a5 5 0 1 0 8.9 2.02" />
    </svg>
  );
}

function HelpingHandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
      <path d="m2 14 6 6" />
    </svg>
  );
}

function OptionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
