"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

function LogoMarquee() {
  return (
    <div className="relative w-full py-8 overflow-hidden">
      <Marquee pauseOnHover speed={40} gradient={false}>
        <div className="flex items-center gap-16">
          <Image src="/tco-logo.png" alt="tco logo" width={120} height={120} />
          <Image src="/ncoc.svg" alt="ncoc logo" width={120} height={120} />
          <Image
            src="/samuryk.svg"
            alt="samuryk-kazyna logo"
            width={120}
            height={120}
          />
          <Image
            src="/kmg.svg.png"
            alt="kmg logo"
            width={120}
            height={120}
            className="h-20"
          />
          <Image
            src="/karabatan.svg"
            alt="karabatan logo"
            width={120}
            height={120}
          />
          <Image
            src="/kpi.svg"
            alt="kpi logo"
            width={120}
            height={120}
            className="h-23"
          />
          <Image src="/logoEni.svg" alt="agip logo" width={120} height={120} />

          <div className="w-10 lg:hidden" />
        </div>
      </Marquee>
    </div>
  );
}

export default LogoMarquee;
