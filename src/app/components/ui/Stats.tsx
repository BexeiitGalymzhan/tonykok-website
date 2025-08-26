"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // % of element visible before triggering
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-25 pb-5 text-white text-center"
    >
      {/* Projects */}
      <div className="flex flex-col items-center space-y-1.5">
        <h1 className="font-bold text-6xl text-sky-200">
          {inView && <CountUp end={200} suffix="+" duration={2.5} />}
        </h1>
        <h2 className="text-xl uppercase tracking-wider">Projects</h2>
      </div>

      {/* Years Experience */}
      <div className="flex flex-col items-center space-y-1.5">
        <h1 className="font-bold text-6xl text-sky-200">
          {inView && <CountUp end={15} suffix="+" duration={2.5} />}
        </h1>
        <h2 className="text-xl uppercase tracking-wider">Years Experience</h2>
      </div>

      {/* Team Members */}
      <div className="flex flex-col items-center space-y-1.5">
        <h1 className="font-bold text-6xl text-sky-200">
          {inView && <CountUp end={100} suffix="+" duration={2.5} />}
        </h1>
        <h2 className="text-xl uppercase tracking-wider">Team Members</h2>
      </div>
    </div>
  );
}

export default Stats;
