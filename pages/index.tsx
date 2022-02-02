import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./compnents/navBar";

const Home: NextPage = () => {
  return (
    <div className="bg-cyan-900">
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

      <main className="relative">
        <div className="w-full h-screen">
          {/* <Image
            src="/images/greenleaf-gradient.png"
            alt="Green leaf"
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute left-1/4 bottom-2/3">
            <h1 className="font-serif text-7xl text-amber-300">Henry</h1>
            <h1 className="font-serif text-7xl text-amber-300">Pendleton</h1>
            <h2 className="text-white">is currently ...</h2>
            <h3 className="text-white">Building cool things.</h3>
            <h4 className="text-white">
              (Recent grad of the Flatiron Software Engineer Program / looking
              for a job)
            </h4>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
