import type { NextPage } from "next";
import Head from "next/head";
import { data } from "../data/projects";
import { useState } from "react";
import NavBar from "../components/navBar";

interface ProjectsData {
  youtube?: any;
  id: number;
  title: string;
  description: string;
  url: string;
  specs: string[];
}

const Resume: NextPage = () => {
  const [projects, setProjects] = useState<ProjectsData[]>(data.projects);

  // a timeline for each project

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
        <div className="grid grid-cols-2 align-middle justify-center">
          {projects.map((project) => (
            <TimelineCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Resume;

const TimelineCard = (props: { project: ProjectsData }) => {
  return (
    <>
      {props.project.id % 2 === 0 ? <div className="w-80 h-80"></div> : null}
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 h-80 mx-auto">
        <h3 className="text-xl font-bold">{props.project.title}</h3>
        <p className="text-sm">{props.project.description}</p>
        {props.project.youtube ? (
          <iframe
            src={`https://www.youtube.com/embed/${props.project.youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : null}
        <div className="flex flex-row justify-end">
          {props.project.youtube ? (
            <a
              href={props.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
            >
              View
            </a>
          ) : null}
          <a
            href={props.project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
      {props.project.id % 2 === 0 ? null : <div className="w-80 h-80"></div>}
    </>
  );
};
