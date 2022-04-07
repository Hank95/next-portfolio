import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import { db } from "../firebase/clientApp";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Chrono } from "react-chrono";

const Resume: NextPage = () => {
  const [timeline, setTimeline] = useState<any[]>([]);
  const timeLineRef = collection(db, "timeLine");
  const q = query(timeLineRef, orderBy("title", "desc"));

  const getProjects = async () => {
    const data = await getDocs(q);
    const timeline = data.docs.map((doc) => {
      return doc.data();
    });
    setTimeline(timeline);
  };
  // a timeline for each project
  useEffect(() => {
    getProjects();
  }, []);

  console.log(timeline);
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
            <div className="text-center text-2xl font-bold text-white">
              <h1>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h1>
            </div>
            {timeline.length > 0 && timeline && (
              <Chrono
                items={timeline}
                mode="VERTICAL_ALTERNATING"
                scrollable={true}
                theme={{
                  primary: "#C84B31",
                  secondary: "#2D4263",
                  cardBgColor: "#2D4263",
                  cardForeColor: "#f0f0f0",
                  titleColor: "#fbe859",
                  textColor: "#f0f0f0",
                  // cardBgColor?: string;
                  // cardForeColor?: string;
                  // primary?: string;
                  // secondary?: string;
                  // textColor?: string;
                  // titleColor?: string;
                }}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;

// const TimelineCard = () => {
//   return (
//     <>
//       {props.project.id % 2 === 0 ? <div className="w-80 h-80"></div> : null}
//       <div className="bg-white shadow-lg rounded-lg p-8 w-80 h-80 mx-auto">
//         <h3 className="text-xl font-bold">{props.project.title}</h3>
//         <p className="text-sm">{props.project.description}</p>
//         {props.project.youtube ? (
//           <iframe
//             src={`https://www.youtube.com/embed/${props.project.youtube}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         ) : null}
//         <div className="flex flex-row justify-end">
//           {props.project.youtube ? (
//             <a
//               href={props.project.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
//             >
//               View
//             </a>
//           ) : null}
//           <a
//             href={props.project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//       {props.project.id % 2 === 0 ? null : <div className="w-80 h-80"></div>}
//     </>
//   );
// };
