import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isAndroid] = useState(() => {
    if (typeof window === "undefined") return false;
    return /Android/i.test(navigator.userAgent);
  });

  // Android layout
  if (isAndroid) {
    return (
      <section className="relative w-full mx-auto" style={{ background: "#050816", height: "auto" }}>
        <div className={`flex flex-col pt-[100px] max-w-7xl mx-auto ${styles.paddingX}`}>

          {/* Text */}
          <div className="flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-16 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Aastha</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, user interfaces and web applications
              </p>
            </div>
          </div>

          {/* Image directly below text */}
          <div className="flex justify-center mt-0 -mx-4">
            <img
              src="/desktop_pc_static.png"
              alt="desktop"
              className="w-screen object-contain opacity-90"
              style={{ maxHeight: "430px" }}
              onError={(e) => e.target.style.display = "none"}
            />
          </div>

          {/* Scroll Indicator */}
          <div className="w-full flex justify-center items-center mt-1">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 pt-0">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>

        </div>
      </section>
    );
  }

  // Desktop layout
  return (
   <section className="relative w-full h-screen mx-auto overflow-hidden" style={{ background: "#050816" }}>

      {/* Text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aastha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center z-10 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;