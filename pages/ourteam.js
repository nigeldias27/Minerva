import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { NextSeo } from "next-seo";
import Head from "next/head";
export async function getStaticProps() {
  const teams = team;
  return { props: { teams } };
}
export default function OurTeam({ teams }) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [dark, setDark] = useState(false);
  const fetchData = async () => {
    // Fetch data from your API or any other data source
    // Update the URL or data fetching logic as per your application's requirements

    // Update the items state with the new data
    setItems([...items, ...teams.slice(page - 1, page - 1 + 10)]);

    // Determine if there's more data to fetch
    if (teams.slice(page - 1, page - 1 + 10).length === 0) {
      setHasMore(false);
    }

    // Increment the page number for the next data fetch
    setPage(page + 10);
  };

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <div className={dark ? "dark" : ""}>
      <NextSeo
        title="Meet The Team - Minerva PESU"
        description="Minerva PESU consists of 100+ members of diverse backgrounds and exceptional skill, all working towards one cause i.e. to promote and practise ethical journalism"
        canonical="https://minervapesu.vercel.app/ourteam"
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
      <div className="md:mx-8 mt-24">
        <div className="mx-4 md:mx-8">
          <UpdatedHeading>Our Team</UpdatedHeading>
        </div>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-2 mt-8 md:grid-cols-2 xl:grid-cols-3 mb-8">
            {items.map((v, i) => {
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
        </InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
}
