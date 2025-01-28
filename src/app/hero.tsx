"use client";

import { Button, Typography, IconButton } from "@material-tailwind/react";

function Hero() {
  return (
    <div id="contact" className="relative w-full">
      <header className="grid !min-h-[49rem] bg-gradient-to-t from-black to-gray-900 to-70%">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h2" color="white" className="mb-4">
              Rui Bastos - Personal Trainer in Burlington, VT
            </Typography>
            <Typography variant="h4" color="white" className="mb-4">
              Gain muscle, Lose weight, Hit your goals!
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Book your free session with me. No commitment. We'll discuss your goals and see if we're a match!
            </Typography>
            <div className="flex space-x-4 justify-center md:justify-start">
            <div className="w-1/2">
              <a
                href="https://www.supersetapp.com/clients/154752/apply"
                target="_blank"
              >
                <Button
                  fullWidth
                  size="lg"
                  variant="gradient"
                  color="red"
                  ripple={true}
                >
                  Contact Me
                </Button>
              </a>
            </div>
            <div>
              <a href="mailto:ruibastos95@gmail.com">
                <IconButton fullWidth
                  size="lg"
                  variant="gradient"
                  color="white">
                  <i className="fa-solid fa-envelope text-2xl not-italic opacity-75"></i>
                </IconButton>
              </a>
            </div>
            </div>
          </div>
          <img
            width="470px"
            height="576px"
            src="/image/hero.png"
            alt="team work"
            className="animate-fade col-span-1 mt-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
    </div>
  );
}
export default Hero;
