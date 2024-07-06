"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div id="contact" className="relative w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Rui Bastos
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Gain muscle, Lose weight, Hit your goals!
            </Typography>
            <div className="w-1/2">
            <a href="https://www.supersetapp.com/clients/154752/apply" target='_blank'>
              <Button fullWidth size="lg" variant="gradient" color="red" ripple={true}>Contact Me</Button>
            </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/hero.png"
            alt="team work"
            className="animate-fade col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
    </div>
  );
}
export default Hero;
