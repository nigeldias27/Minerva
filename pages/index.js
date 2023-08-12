import Head from "next/head";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import styles from "@/styles/Home.module.css";
import Counter from "@/components/Counter";
import HomeComponent from "@/components/Home";
import Headers from "@/components/Header";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NextSeo
        title="Minerva - The Official Journalism Club of PES University"
        description="We are bangalore's first student-run college newspaper"
        canonical="https://minervapesu.vercel.app"
        openGraph={{
          url: "https://minervapesu.vercel.app",
          title: "Minerva - The Official Journalism Club of PES University",
          description: "Bangalore's first student-run college newspaper",
          siteName: "Minerva PESU",
        }}
      />

      <Head>
        <title>Minerva</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        //For the launch of the website, a countdown counter was created which is rendered if the date is before April 12, 2023 16:00:00
        // Otherwise the Home page (HomeComponent) is rendered
      }
      {new Date("April 12, 2023 16:00:00").getTime() >= new Date().getTime() ? (
        <Counter />
      ) : (
        <HomeComponent />
      )}
    </div>
  );
}
