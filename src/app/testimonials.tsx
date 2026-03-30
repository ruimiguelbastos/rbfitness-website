"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import GalleryWithCarousel from "../components/gallery-with-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TESTIMONIALS = [
  {
    images: [
      {
        source: "/image/transformations/k-1.jpeg",
        title: "Transfomation 1",
      },
      {
        source: "/image/transformations/k-2.jpeg",
        title: "Transfomation 2",
      },
      {
        source: "/image/transformations/k-3.jpeg",
        title: "Transfomation 3",
      },
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
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1 
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: true })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-10 bg-white overflow-x-hidden">
      <div className="px-3 md:px-6 lg:px-12 relative max-w-[1800px] mx-auto">
        
        <button 
          onClick={scrollPrev}
          className="absolute left-[-10px] lg:left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>

        <button 
          onClick={scrollNext}
          className="absolute right-[-10px] lg:right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[-16px]"> 
            {TESTIMONIALS.map(({ images }, key) => (
              <div 
                key={key}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-[24px] relative h-[400px]"
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