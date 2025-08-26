import Image from "next/image";
import { ProjectsProp } from "@/data/projects";

interface ProjectCardProps extends ProjectsProp {
  isReversed?: boolean;
}

function ProjectCard({
  title,
  description,
  image,
  isReversed,
}: ProjectCardProps) {
  return (
    <div className="w-full py-10 border-b border-gray-800">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center`}
      >
        <div
          className={`space-y-4 max-w-xl text-center lg:text-left mx-auto 
          ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <h2 className="uppercase tracking-widest text-xl sm:text-2xl lg:text-3xl font-semibold">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className={`w-full flex justify-center 
          ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={image}
              alt="project image"
              width={470}
              height={350}
              className="rounded-xl object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
