"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
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
        source: "/image/transformations/alex-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/alex-2.jpeg",
        title: "Transfomation 2",
      }
    ],
  },
  {
    images: [
      {
        source: "/image/transformations/steve-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/steve-2.jpeg",
        title: "Transfomation 2",
      },
      {
        source: "/image/transformations/steve-3.jpeg",
        title: "Transfomation 3",
      }
    ],
  },
  {
    images: [
      {
        source: "/image/transformations/b-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/b-2.jpeg",
        title: "Transfomation 2",
      },
      {
        source: "/image/transformations/b-3.jpeg",
        title: "Transfomation 3",
      }
    ],
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1 
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-10 bg-white">
      <div className="px-3 md:px-6 lg:px-12 ">
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container */}
          <div className="flex ml-[-16px]"> 
            {TESTIMONIALS.map(({ images }, key) => (
              <div 
                key={key}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-[16px] relative h-[400px]"
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-md">
                  <GalleryWithCarousel key={key} {...images} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;