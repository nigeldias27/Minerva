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
import Head from "next/head";
export default function OurTeam() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <div>
      <NextSeo
        title="Meet The Team - Minerva PESU"
        description="Minerva PESU consists of 100+ members of diverse backgrounds and exceptional skill, all working towards one cause i.e. to promote and practise ethical journalism"
        canonical="https://minervapesu.vercel.app"
        openGraph={{
          url: "https://minervapesu.vercel.app/ourteam",
          title: "Meet The Team - Minerva PESU",
          description:
            "Minerva PESU consists of 100+ members of diverse backgrounds and exceptional skill, all working towards one cause i.e. to promote and practise ethical journalism",
          siteName: "Minerva PESU",
        }}
      />
      <Head>
        <title>Our Team</title>
      </Head>
      <Headers dark={dark} setDark={setDark} />
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
  );
}
