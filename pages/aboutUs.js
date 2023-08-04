import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrow90DegRight, BsArrowBarRight, BsArrowDown, BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import quotes from "../public/assets/quotes.png"
import quotesdark from "../public/assets/quotesdark.png"

// const boxStyle="bord"

export default function AboutUs() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-greyBlack">
        <Headers dark={dark} setDark={setDark} />
        <div className="flex justify-center flex-col mx-8 pb-24 pt-16 md:py-18">
          <UpdatedHeading>About Us</UpdatedHeading>

          <div className="grid grid-cols-2 mx-8 pt-8 font-georgia text-4xl">
            <div>
              <h3 className="text-#1D1D1D dark:text-white  mr-8 font-bold">
                {"PES University weekly publication. Bangalore's first ".toUpperCase()}
                <span className="text-londonYellow dark:text-yellow">
                  STUDENT-RUN
                </span>{" "}
                {"college newspaper.".toUpperCase()}
              </h3>
            </div>
            <Image
        src={  dark? quotesdark:quotes}
        alt="Quotes image"
        style={{maxWidth : "20%"}}
        className="absolute   left-1/2 transform -translate-y-1/2  scale-50 "
      />
            <div className=" flex flex-col justify-end">
              <p className=" text-gray-400 text-xl z-10">
                We are a group of thinkers that challenge people through good
                journalism. We strive to provide the required tools and
                knowledge to develop skills and Inspire change.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative z-100 justify-center">
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
        <div className="py-12 mx-8">
          <div className="relative">
            <div className="text-white dark:text-black grid grid-cols-2 ">
              <div className=" bg-gray-900 dark:bg-white font-georgia text-lg p-20 m-4 -mr-10 scale-75 -my-2 ">
                {" "}
                Minerva focuses on educating students in the field of media and
                mass communications via our various channels.
              </div>
              <div className=" bg-gray-900 dark:bg-white font-georgia text-lg p-20 m-4 scale-75 -ml-10 -my-2">
                We have weekly blog issues where our team covers all major
                events around our nation and the world.
              </div>
            </div>
            <div className="text-white dark:text-black grid grid-cols-2">
              <div className=" bg-gray-900 dark:bg-white font-georgia text-lg p-20 m-4  scale-75 -mr-10 -my-2">
                {" "}
                Minerva also provides secondary coverage of important events
                happening in PESU as well as highlighting achievements.
              </div>
              <div className=" bg-gray-900 dark:bg-white font-georgia text-lg p-20 m-4 scale-75 -ml-10 -my-2">
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
        <div className="mx-8 mt-24">
          <UpdatedHeading>Our Team</UpdatedHeading>
<div className="flex flex-row"  >
<div className="border-2 dark:text-white font-bold border-green-500 p-4 m-4 rounded-lg text-center"  > 
View All
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Club Heads
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
UI/UX
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Web dev
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
AV
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Journalism
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Ops Content
</div>
<div className="border-2 dark:text-white  font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Social Media Content
</div>
<div className="border-2 dark:text-white font-bold border-white-900 p-4 m-4 rounded-lg text-center"  > 
Animations
</div>
</div>

<div className="flex flex-row relative z-100 justify-end">
          <button className="z-50 absolute bottom-0 border p-4 rounded-full border-black bg-pink">
            <BsArrowRight size={16} />

          </button>
          <button className="z-90 absolute bottom-2 border p-4 rounded-full border-black bg-yellow">
            <BsArrowRight size={16} />
          </button>
          <button className="z-90 absolute bottom-1 border p-4 rounded-full border-black bg-blue">
          
            <BsArrowRight size={16} />
          </button>
        </div>

          <div className="  grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 mb-8">
            {team.map((v, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -60,width:400  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <PersonCard
                    key={i}
                    imageURL={v.link}
                    Name={v.name}
                    Role="Web Developement"
                  ></PersonCard>
                </motion.div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
