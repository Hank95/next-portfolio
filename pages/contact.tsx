import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import { db } from "../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore"; 
import Footer from "../components/footer";

// contact page where you can contact me

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setSuccess("");
    await setDoc(doc(db, "contact",email), {
      name,
      email,
      message,
      date: new Date().toISOString()
    });
    setName("");
    setEmail("");
    setMessage("");
    setSuccess("Message sent successfully");
  };


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
          <div className="shadow-lg bg-slate-900 rounded-lg p-5 my-1 mx-auto w-5/6 text-white">
            <div className="text-center text-2xl font-bold text-white"></div>
            <div className="text-center text-xl font-bold text-white">
              <h1>Contact Me</h1>
            </div>
            <div className="text-center text-xl font-bold text-white">
              <h1>Henry Pendleton</h1>
            </div>
            {/* Form where a user can imput a email  */}
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4">

                <div className="grid grid-cols-1 gap-4">
                  <label className="text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-gray-800 border-2 border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-gray-800 border-2 border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label className="text-white" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="bg-gray-800 border-2 border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:shadow-outline"
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
          </div>
        </div>
      </main>
      <Footer />  
    </>
  );
};


export default Contact;