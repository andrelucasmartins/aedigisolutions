import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-foreground">
      <section className="text-secondary mx-4">
        <div className="flex justify-between items-center gap-8 max-w-7xl sm:mx-auto py-16 sm:py-24 flex-col sm:flex-row sm:direction-reverse">
          <div className="flex flex-col space-y-4">
            <p className="text-xl font-bold text-primary">
              IT solutions for the new age
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold">
              A leading managed IT services provider
            </h1>
            <p className="text-lg">
              We'll keep your systems running and proactively fix problems
              before you're aware of them We'll respond to your service request
              in 15 minutes or less
            </p>
            <Button className="w-fit mt-8" asChild>
              <Link
                href={
                  "https://wa.me/5519993028888?text=Olá%20como%20posso%20te%20ajudar?%20Somos%20AE%20Digi%20Solutions%20especialistas%20em%20desenvolvimento%20de%20Landing%20Pages,%20websites%20sistemas%20para%20aplicações%20web,%20Aplicativos."
                }
                target="_blank"
                rel="noreferrer"
              >
                Ligue para nós: (19) 99302-8888
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://github.com/andrelucasmartins.png"
              alt="André Ezequiel"
              width={600}
              height={600}
              className="rounded"
            />
          </div>
        </div>
      </section>
      <section className=" py-14  mx-4">
        <div className="flex justify-around items-center gap-8 max-w-7xl  sm:mx-auto  py-20 bg-background rounded-md flex-col sm:flex-row text-center sm:text-start">
          <div className="flex flex-col space-y-4">
            <h3 className="text-6xl font-bold">12</h3>
            <p className="text-lg">Years of experience</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-6xl font-bold">75k</h3>
            <p className="text-lg">Satisfied clients worldwide</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-6xl font-bold">73k</h3>
            <p className="text-lg">Project has been completed</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-6xl font-bold">4.8</h3>
            <p className="text-lg">Companies success rate</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col max-w-3xl mx-4 sm:mx-auto text-secondary pb-16">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h2 className="text-xl font-bold text-primary">
            Our latest services
          </h2>
          <p className="text-3xl md:text-6xl font-bold text-center">
            We deal with aspects of prossional IT services
          </p>
        </div>
      </section>
    </main>
  );
}
