"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import GalleryWithCarousel from "../components/gallery-with-carousel";

const TESTIMONIALS = [
  {
    images: [
      {
        source: "/image/transformations/rui-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/rui-2.jpeg",
        title: "Transfomation 2",
      },
    ],
  },
  {
    images: [
      {
        source: "/image/transformations/tanjil-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/tanjil-2.jpeg",
        title: "Transfomation 2",
      },
    ],
  },
  {
    images: [
      {
        source: "/image/transformations/mario-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/mario-2.jpeg",
        title: "Transfomation 2",
      },
      {
        source: "/image/transformations/mario-3.jpeg",
        title: "Transfomation 3",
      },
    ],
  },
  {
    images: [
      {
        source: "/image/transformations/alex-1.JPG",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/alex-2.JPG",
        title: "Transfomation 2",
      }
    ],
  },
];

export function Testimonials() {
  return (
    <section id="transformations" className="px-10 py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Transformations
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map(({ images }, key) => (
            <GalleryWithCarousel key={key} {...images} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
