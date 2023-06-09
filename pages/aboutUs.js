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
      <AnimatedHeading>About Us</AnimatedHeading>
      <h4 className="font-bold text-lg pb-4 mx-8 font-typewriter">
        PES University weekly publication. Bangalore{"'"}s first student-run
        college newspaper. We are a group of thinkers that challenge people
        through good journalism. We strive to provide the required tools and
        knowledge to develop skills and Inspire Change. Click below to know
        more. ~ Minerva (thy Serva)
      </h4>
      <AnimatedHeading>What we do?</AnimatedHeading>
      <p className="mx-8 font-typewriter">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div>
            1. Weekly Newspaper Highlighting major events across the world
            <br></br> 2. Weekly Podcast series<br></br> 3. The {'"'}extra{'"'}{" "}
            you deserve<br></br>
          </div>
          <div>
            1. Workshops on storytelling, mass communication, and networking
            <br></br> 2. Collaboration with news houses and marketing agencies
            <br></br> 3. Hands-on exposure through fun events<br></br>
          </div>
          <div>
            1. Online News Cards<br></br> 2. Special Investigative Piece every
            fourth week<br></br> 3. Bi-weekly Arts section featuring in-house
            creativity
          </div>
        </div>
      </p>
      <AnimatedHeading>Meet the team</AnimatedHeading>
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
