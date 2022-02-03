import { useEffect, useState } from "react";
import { db } from "../firebase/clientApp";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import ProjectCard from "../components/projectCard";

interface Project {
  title: string;
  description: string;
  url: string;
  youtube_url: string;
  specs: Array<string>;
}

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState<any>("");
  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      console.log(data);
      const projects = data.docs.map((doc) => {
        return doc.data();
      });
      setProjects(projects);
      setActive(projects[0]);
    };
    getProjects();
  }, []);

  const handleClick = (project: Project) => {
    setActive(project);
  };

  console.log(active);
  return (
    <div className="grid grid-cols-3 gap-4 w-3/4 mx-auto">
      <div>
        <div className="bg-amber-300 shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">Projects:</h3>
        </div>
        {projects.map((project: Project, i) => {
          return (
            <div
              key={i}
              onClick={() => handleClick(project)}
              className="col-span-1"
            >
              <div
                className={`bg-white shadow-lg rounded-lg p-5 my-1 hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out hover:cursor-pointer active:bg-blue-600${
                  project.title === active.title ? "text-amber-300" : ""
                }`}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <ProjectCard project={active} />
    </div>
  );
}
// export const getStaticProps: GetStaticProps = async () => {
//   const projectsCollectionRef = collection(db, "projects");
//   const data = await getDocs(projectsCollectionRef);
//   const project = data.docs.map((doc) => {
//     return doc.data();
//   });

//   return {
//     props: {
//       project,
//     },
//   };
// };
