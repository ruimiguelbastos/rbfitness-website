"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function DoubleArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      color="red"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function Features() {
  return (
    <section id="about" className="px-10 py-20 bg-gray-900">
      <div className="container mx-auto mb-10 text-center ">
        <Typography variant="h2" color="white" className="mb-2">
          About Me
        </Typography>
        <Typography color="white" className="font-bold uppercase">
          Hi there! My name is Rui. Yes I know, it sounds a little odd but
          hopefully you will get used to it.
        </Typography>
      </div>
      <div className="container mx-auto text-left">
        <Typography
          variant="paragraph"
          color="white"
          className="mx-auto w-full px-4 lg:w-11/12 lg:px-8 "
        >
          I joined a gym when I first got into college 10 years ago, and I fell
          in love with fitness instantly. However, I know this is not the case
          for everyone. My goal is not to make you feel the same love I do for
          working out, but to find a way to make it as enjoyable as possible.
          While still helping you reach the goals you never thought you could.
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="mx-auto w-full px-4 lg:w-11/12 lg:px-8 "
        >
          I work with my clients as a team. We will talk, get to know each
          other, and build habits that fit your lifestyle and goals.
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="mx-auto w-full px-4 lg:w-11/12 lg:px-8 "
        >
          I can help you:
        </Typography>
        <List className="mx-auto w-1/2 px-4 lg:w-11/12 lg:px-8 text-left">
          <ListItem ripple={false} className="py-1 pr-1 pl-4 text-white">
            <ListItemPrefix>
              <IconButton variant="text" color="blue-gray">
                <DoubleArrowIcon />
              </IconButton>
            </ListItemPrefix>
            Gain Muscle
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4 text-white">
            <ListItemPrefix>
              <IconButton variant="text" color="blue-gray">
                <DoubleArrowIcon />
              </IconButton>
            </ListItemPrefix>
            Lose Weight
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4 text-white">
            <ListItemPrefix>
              <IconButton variant="text" color="blue-gray">
                <DoubleArrowIcon />
              </IconButton>
            </ListItemPrefix>
            Get Stronger
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4 text-white">
            <ListItemPrefix>
              <IconButton variant="text" color="blue-gray">
                <DoubleArrowIcon />
              </IconButton>
            </ListItemPrefix>
            Be healthier
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4 text-white">
            <ListItemPrefix>
              <IconButton variant="text" color="blue-gray">
                <DoubleArrowIcon />
              </IconButton>
            </ListItemPrefix>
            Learn habits that will change your life
          </ListItem>
        </List>
      </div>
    </section>
  );
}
export default Features;
