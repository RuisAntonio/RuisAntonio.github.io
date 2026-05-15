import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";


// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCneter,styles.textCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <div>
          <span className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {aboutMe.intro}
          </span>
        </div>
      </div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
