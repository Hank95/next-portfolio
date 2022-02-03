export default function ProjectCard({ project }: { project: any }) {
  console.log(project);
  return (
    <div className="col-span-2">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
        {project.youtube_url ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.youtube_url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : null}
        <div className="flex flex-row justify-end">
          {project.youtube_url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 p-2 rounded-lg hover:text-amber-300 hover:bg-slate-500 transition duration-500 ease-in-out"
            >
              View
            </a>
          ) : null}
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
}
