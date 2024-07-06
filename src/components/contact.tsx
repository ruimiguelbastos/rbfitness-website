"use client";

import React from "react";
import { Typography, Card,CardBody,Input, Textarea,
  Checkbox,
  Button, } from "@material-tailwind/react";


export function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
  }

  return (
    <div className="flex items-center animate-fade">
      <Card className="w-96">
        <CardBody>
          <form className="flex flex-col gap-4 lg:max-w-sm" onSubmit={handleSubmit} >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      First Name
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="First Name"
                      name="first-name"
                      className="focus:border-t-gray-900"
                      containerProps={{
                        className: "min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Last Name
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="Last Name"
                      name="last-name"
                      className="focus:border-t-gray-900"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Email
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="name@email.com"
                    name="email"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Message
                  </Typography>
                  <Textarea
                    rows={6}
                    color="gray"
                    placeholder="Message"
                    name="message"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <Button type="submit" className="w-full" color="red">
                  Send message
                </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Contact;
