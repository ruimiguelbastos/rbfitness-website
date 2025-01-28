"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Click on this link to contact me and I'll reach out to you!",
    href: "https://www.supersetapp.com/clients/154752/apply",
  },
  {
    title: "Do I have to pay on our first meeting?",
    desc: "No, our first meeting is completly free. This is where we'll get to know each other and see if we are a good fit to work together",
  },
  {
    title: "What kind of services do you provide? How much do I pay?",
    desc: "Check this page for all the services information.",
    href: "#services",
  },
  {
    title: "Where do you provide in person training sessions?",
    desc: "I do personal training sessions in Saint Albans, VT and Colchester, VT",
    href: "#services",
  },
];

export function Faqs() {
  return (
    <section id="faq" className="px-10 py-20 bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="white" className="mb-20">
            Frequently asked questions
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc, href }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="white" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {href ? (
                    <a
                      href={href}
                      target={href.includes("http") ? "_blank" : "_self"}
                    >
                      {desc}
                    </a>
                  ) : (
                    desc
                  )}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
