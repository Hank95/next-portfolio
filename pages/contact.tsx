import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import { db } from "../firebase/clientApp";
import Footer from "../components/footer";

// contact page where you can contact me

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <>
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
      <main>
        <div className="grid grid-cols-1 align-middle justify-center">
          {/* Todays date big and bold */}
          <div className="shadow-lg bg-slate-900 rounded-lg p-5 my-1 mx-auto w-5/6 text-white">
            <div className="text-center text-2xl font-bold text-white"></div>
            <div className="text-center text-xl font-bold text-white">
              <h1>Contact</h1>
            </div>
            <div className="text-center text-xl font-bold text-white">
              <h1>Henry Pendleton</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
