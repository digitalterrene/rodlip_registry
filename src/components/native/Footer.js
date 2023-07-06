import React from "react";
import logo from "../../assets/components/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="px-3 pt-4 text-white lg:px-9   bg-[#0C4A60]">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
              <Image src={logo} alt="logo" className="  w-20" />
              <span className="ml-2 text-xl font-bold tracking-wide text-white">
                Organization
              </span>
            </a>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-sm text-white">
                At RODLIP, we, the people, are resolute in our commitment to
                dedicate ourselves and our resources towards fulfilling the
                aspirations of godly socioeconomic and eco-political ideologies
                that strive to create a world that mirrors the heavenly kingdom.
                Our objective is to establish a platform where leaders lead
                guided by the sacred principles of the Bible, ensuring a just
                and righteous governance.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Registries
            </p>
            <Link href="/fenac.rodlip.org">FENAC</Link>
            <Link href="/kengfoundation.rodlip.org">Keng Foundation</Link>

            <p className="text-base font-bold tracking-wide text-white">
              Superstatals
            </p>
            <Link href="/https://website.vertueal.com">Vertueal</Link>
            <Link href="/https://liquidbill.com">Liquid Bill</Link>
            <Link href="/https://picconne.com">Picconne</Link>
            <Link href="/https://datalinc.com">Datalinc</Link>
            <Link href="/https://perreniallegacy.org">Perrenial Legacy</Link>
          </div>

          <div>
            <p className="text-base font-bold tracking-wide text-white">
              WE ARE ALSO AVAILABLE ON
            </p>
            <div className="flex items-center gap-1 px-2">
              <a href="#" className="w-full min-w-xl">
                <img
                  src="https://mcqmate.com/public/images/icons/playstore.svg"
                  alt="Playstore Button"
                  className="h-10"
                />
              </a>
              <a
                className="w-full min-w-xl"
                href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
              >
                <img
                  src="https://mcqmate.com/public/images/icons/youtube.svg"
                  alt="Youtube Button"
                  className="h-28"
                />
              </a>
            </div>
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a href="#" title="send email">
                info@rodlip.org
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse text-white justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm ">
            © Copyright 2023 Rodlip Organization. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#"
                className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
