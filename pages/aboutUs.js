import AnimatedHeading from "@/animatedComponents/Heading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div>
      <Headers />
      <motion.div
        initial={{ boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)" }}
        whileHover={{ boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)" }}
        className="flex justify-center flex-col py-24 md:py-18 "
        style={{
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "border-box",
          backgroundPositionY: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundImage:
            "url('https://news.pes.edu/Uploads/20230220%20050323_5.png')",
        }}
      >
        <h1 className="pb-12 text-3xl font-merriweather pl-8 sm:pl-8 text-white text-opacity-90">
          About Us
        </h1>
        <h4 className="font-bold text-lg pb-8 mx-8 font-typewriter text-white text-opacity-40">
          PES University weekly publication. Bangalore{"'"}s first student-run
          college newspaper. We are a group of thinkers that challenge people
          through good journalism. We strive to provide the required tools and
          knowledge to develop skills and Inspire Change. Click below to know
          more. ~ Minerva (thy Serva)
        </h4>
      </motion.div>

      <div className="py-12">
        <AnimatedHeading>What We Do?</AnimatedHeading>
        <p className=" font-typewriter">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-r from-minervaAboutl to-minervaAboutr text-lg rounded-lg drop-shadow-xl m-8 p-6 text-white text-opacity-70"
            >
              1. Weekly Newspaper Highlighting major events across the world
              <br></br> 2. Weekly Podcast series<br></br> 3. The {'"'}extra{'"'}{" "}
              you deserve<br></br>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-r from-minervaAboutl to-minervaAboutr text-lg rounded-lg drop-shadow-xl m-8 p-6 text-white text-opacity-70"
            >
              1. Workshops on storytelling, mass communication, and networking
              <br></br> 2. Collaboration with news houses and marketing agencies
              <br></br> 3. Hands-on exposure through fun events<br></br>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-r from-minervaAboutl to-minervaAboutr text-lg rounded-lg drop-shadow-xl m-8 p-6 text-white text-opacity-70"
            >
              1. Online News Cards<br></br> 2. Special Investigative Piece every
              fourth week<br></br> 3. Bi-weekly Arts section featuring in-house
              creativity
            </motion.div>
          </div>
        </p>
      </div>

      <AnimatedHeading>Meet The Team</AnimatedHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8">
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

      <Footer />
    </div>
  );
}
