import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { NextSeo } from "next-seo";
export default function AboutUs() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <div className={dark ? "dark" : ""}>
      <NextSeo
        title="About Us - Minerva PESU"
        description="We are a group of thinkers that challenge people through good journalism. We strive to provide the required tools and knowledge to develop skills and Inspire change."
        canonical="https://minervapesu.vercel.app"
        openGraph={{
          url: "https://minervapesu.vercel.app/aboutUs",
          title: "About Us - Minerva PESU",
          description:
            "We are a group of thinkers that challenge people through good journalism. We strive to provide the required tools and knowledge to develop skills and Inspire change.",
          siteName: "Minerva PESU",
        }}
      />
      <div className="bg-white dark:bg-greyBlack">
        <Headers dark={dark} setDark={setDark} />
        <div className="flex justify-center flex-col mx-8 pb-24 pt-16 md:py-18">
          <UpdatedHeading>About Us</UpdatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-8 pt-8 font-georgia ">
            <div>
              <h3 className="text-#1D1D1D dark:text-white mr-8 font-bold text-lg md:text-4xl">
                {"PES University weekly publication. Bangalore's first ".toUpperCase()}
                <span className="text-londonYellow dark:text-yellow">
                  STUDENT-RUN
                </span>{" "}
                {"college newspaper.".toUpperCase()}
              </h3>
            </div>
            <div className=" flex flex-col justify-end pt-3 md:pt-0">
              <p className=" text-gray-400 text-end text-sm md:text-xl">
                We are a group of thinkers that challenge people through good
                journalism. We strive to provide the required tools and
                knowledge to develop skills and Inspire change.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative z-100 justify-center pt-6">
          <button className="z-50 absolute bottom-0 border p-4 rounded-full border-black bg-pink">
            <BsArrowDown size={16} />
          </button>
          <button className="z-90 absolute bottom-2 border p-4 rounded-full border-black bg-yellow">
            <BsArrowDown size={16} />
          </button>
          <button className="z-90 absolute bottom-1 border p-4 rounded-full border-black bg-blue">
            <BsArrowDown size={16} />
          </button>
        </div>
        <div className="py-12 mx-8 hidden md:flex">
          <div className="relative">
            <div className="text-white dark:text-black grid grid-cols-2">
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                {" "}
                Minerva focuses on educating students in the field of media and
                mass communications via our various channels.
              </div>
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                We have weekly blog issues where our team covers all major
                events around our nation and the world.
              </div>
            </div>
            <div className="text-white dark:text-black grid grid-cols-2">
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                {" "}
                Minerva also provides secondary coverage of important events
                happening in PESU as well as highlighting achievements.
              </div>
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                Workshops and talks are held to bring in renowned personalities
                in the field so students get real time exposure to the field.
              </div>
              <div
                style={{ transform: "translate(-50%,-50%)" }}
                className="absolute z-20 left-1/2 top-1/2 border border-black bg-blue py-8 px-12"
              >
                <p className="font-georgia text-black font-bold text-2xl">
                  What Do We Do?
                </p>
              </div>
              <div
                style={{ transform: "translate(-47%,-42%)" }}
                className="absolute z-10 left-1/2 top-1/2 border border-black bg-pink py-8 px-12"
              >
                <p className="font-georgia font-bold text-2xl">
                  What Do We Do?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-8 mt-16 md:hidden">
          <UpdatedHeading>What we Do</UpdatedHeading>
          <div className="py-2">
            <div className="w-full dark:bg-white bg-greyBlack">
              <p className="font-georgia text-sm dark:text-black text-white p-4">
                Minerva focuses on educating students in the field of media and
                mass communications via our various channels.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="w-full dark:bg-white bg-greyBlack">
              <p className="font-georgia text-sm dark:text-black text-white p-4">
                We have weekly blog issues where our team covers all major
                events around our nation and the world.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="w-full dark:bg-white bg-greyBlack">
              <p className="font-georgia text-sm dark:text-black text-white p-4">
                Minerva also provides secondary coverage of important events
                happening in PESU as well as highlighting achievements.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="w-full dark:bg-white bg-greyBlack">
              <p className="font-georgia text-sm dark:text-black text-white p-4">
                Workshops and talks are held to bring in renowned personalities
                in the field so students get real time exposure to the field.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
