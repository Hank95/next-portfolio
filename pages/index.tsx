import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import Portfolio from "../components/portfolio";
import Earth from "../components/earth";
import Bio from "../components/bio";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Henry Pendleton</title>
        <meta name="description" content="Henry Pendleton's website" />
        <link rel="icon" href="/images/hp_logo2_white.svg" />

        <meta property="og:title" content="Henry Pendleton" />
        <meta property="og:description" content="Henry Pendleton's website" />
        <meta property="og:image" content="/images/hp_logo2_white.svg" />
        <meta property="og:url" content="https://henrypendleton.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Henry Pendleton" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>

      <NavBar />
      <main className="w-screen h-screen relative">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Canvas id="canvas">
          <Earth />
        </Canvas>
        <Bio />
        {/* </Suspense> */}
      </main>
      <Portfolio />

      <Footer />
    </div>
  );
};

export default Home;
