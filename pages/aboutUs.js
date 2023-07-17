import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div
      className={
        typeof window !== "undefined"
          ? localStorage.getItem("mode") == "dark"
            ? "dark"
            : ""
          : ""
      }
    >
      <div className="bg-white dark:bg-greyBlack">
        <Headers />
        <div className="flex justify-center flex-col mx-8 pb-24 pt-16 md:py-18">
          <UpdatedHeading>About Us</UpdatedHeading>

          <div className="grid grid-cols-2 mx-8 pt-8 font-georgia text-4xl">
            <div>
              <h3 className="text-#1D1D1D dark:text-white mr-8 font-bold">
                {"PES University weekly publication. Bangalore's first ".toUpperCase()}
                <span className="text-londonYellow dark:text-yellow">
                  STUDENT-RUN
                </span>{" "}
                {"college newspaper.".toUpperCase()}
              </h3>
            </div>
            <div className=" flex flex-col justify-end">
              <p className=" text-gray-400 text-xl">
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
            <div className="text-white dark:text-black grid grid-cols-2">
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
            <div className="text-white dark:text-black grid grid-cols-2">
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
              <div className=" bg-black dark:bg-white font-georgia text-lg p-20 m-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
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

          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 mb-8">
            {team.map((v, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -60 }}
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
