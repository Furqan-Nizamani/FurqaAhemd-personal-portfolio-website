'use client'
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import {HeroScrollDemo} from "./Scroll"

export default function CardHoverEffectDemo() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-2 flex flex-col items-center">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              My
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5" />
                <span className="relative text-purple-700"> Projects </span>
              </span>
            </h2>
          </div>
        </div>
        <HoverEffect items={projects} />
        {/* Live Project */}
        <HeroScrollDemo/>
      </div>
    </>
  );
}

export const projects = [
  {
    title: "E-Commrce website",
    description:
      "The E-Commrce website for multi vandor and single vandor sallers the Site is under construction",
    link: "https://stripe.com",
    image: "/eccomrce1.jpeg" // Changed 'src' to 'image' and simplified path
  },
  {
    title: "Gallery",
    description:
      "The Gallery website is under Constructions for all users to store Images and Videos and to save them",
    link: "https://netflix.com",
    image: "/gallery.jpeg" // Changed 'src' to 'image'
  },
  {
    title: "Chat Application",
    description:
      "The Chat Application is under constructions for all users they can chat and entertain eachother",
    link: "https://google.com",
    image: "/chat_application.png", // Changed 'src' to 'image'
  },
  {
    title: "Travel Booking Platform",
    description:
      "Travel Booking Platform is under the construction for all those users who are intrusted in travling",
    link: "https://meta.com",
    image: "/traverlimage.jpeg" // Changed 'src' to 'image'
  },
  {
    title: "Crypto Dashboard",
    description:
      "Crypto Dashboard is under the construction for all those who are intrusted in Crypto currency",
    link: "https://amazon.com",
    image: "/Crypto_Dashboard.jpeg" // Changed 'src' to 'image'
  },
  {
    title: "Learning Management System",
    description:
      "Learning Management System is under Constructions for those who want to learn new skills",
    link: "https://microsoft.com",
    image: "/LearningManagementSystem.png" // Changed 'src' to 'image'
  },
];

