"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8">
      <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-7 md:justify-between">
        <Typography
          color="white"
          className="text-center font-normal opacity-75"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography>

        <div className="flex gap-2">
          <a href="https://www.instagram.com/ruimiguelbastos/" target="_blank">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
          </a>
          <a href="mailto:ruibastos95@gmail.com">
            <IconButton variant="text" color="white">
              <i className="fa-solid fa-envelope text-2xl not-italic opacity-75"></i>
            </IconButton>
          </a>
          <IconButton variant="text" color="white" className="text-lg">
            🏳️‍🌈
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
