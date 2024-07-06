"use client";

import { Typography } from "@material-tailwind/react";
import { PricingCard } from "../components/pricing-card";

const SERVICES = [
  {
    title: 'STANDALONE WORKOUT PLAN',
    price: '30',
    bulletpoints: [
      'Individualized training plan',
      'Exercise library',
    ],
    color: 'gray',
  },
  {
    title: 'NUTRITIONAL GUIDANCE',
    price: '19',
    bulletpoints: [
      'Individualized nutritional strategy',
      'Weekly check-ins',
      'Regular video chats',
      'Open messages with me through app',
    ],
    frequency: "week",
    color: 'blue-gray',
  },
  {
    title: 'ONLINE COACHING',
    price: '36',
    bulletpoints: [
      'Individualized training plan',
      'Individualized nutritional strategy',
      'Weekly check-ins',
      'Regular video chats',
      'Technique evaluation',
      'Open messages with me through app',
      'Exercise library',
    ],
    frequency: "week",
    color: 'gray',
  },
];

export function Services() {
  return (
      <section id="services" className="px-10 py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Services
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {SERVICES.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;