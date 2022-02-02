import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { AppProps } from "next/app";
import { db } from "../firebase/clientApp";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

// interface Project {
//   title: string;
//   description: string;
//   url: string;
//   youtube_url: string;
//   specs: Array<string>;
// }

export default function Portfolio({ project }: AppProps) {
  //   const [projects, setProjects] = useState([]);
  //   const projectsCollectionRef = collection(db, "projects");

  //   useEffect(() => {
  //     const getProjects = async () => {
  //       const data = await getDocs(projectsCollectionRef);
  //       console.log(data);
  //       const projects = data.docs.map((doc) => {
  //         return doc.data();
  //       });
  //       setProjects(projects);
  //     };
  //     getProjects();
  //   }, []);

  console.log(project);

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* {data.map((project, i) => {
        return (
          <div className="col-span-1" key={i}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-row justify-end">
                <a
                  href={project.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
                >
                  View
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const projectsCollectionRef = collection(db, "projects");
  const data = await getDocs(projectsCollectionRef);
  const project = data.docs.map((doc) => {
    return doc.data();
  });

  return {
    props: {
      project,
    },
  };
};
