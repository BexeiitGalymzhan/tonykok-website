import Tab from "./ui/Tab";
import Image from "next/image";
import Stats from "./ui/Stats";
import InfoCards from "./ui/InfoCards";

function About() {
  return (
    <>
      <section id="about" className="relative  pb-15 mt-10 sm:mt-30">
        <h2 className="uppercase tracking-widest text-lg  text-blue-100 max-w-80 mb-2">
          О компании
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div>
            <h1 className="text-2xl lg:text-4xl mb-10  ">
              ТОО &ldquo;Tonykok&ldquo; Constructions
            </h1>
            <Tab />
          </div>

          {/* <div className="overflow-hidden md:[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)] mx-auto">
            <Image
              src="/3253.jpg"
              alt="Construction Site "
              width={650}
              height={650}
              className="rounded-lg  "
            />
          </div> */}

          <div className="relative w-full h-72  md:h-[400px] overflow-hidden md:[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)] mx-auto rounded-lg">
            <Image
              src="/3253.jpg"
              alt="Construction Site"
              fill
              priority
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
        <InfoCards />
        <Stats />
      </section>
    </>
  );
}

export default About;
