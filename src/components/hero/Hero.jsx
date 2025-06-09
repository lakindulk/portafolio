/* eslint-disable react/jsx-no-comment-textnodes */
import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Lakindu!</span>{" "}
        </motion.h1>
        {/* Awards */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2  className="awardstitle" variants={awardVariants}>Pixels with Purpose</motion.h2>
          <motion.p className="awarddes"  variants={awardVariants}>
            {" "}
            I’m a creative developer who loves turning ideas into smooth,
            interactive web experiences.
          </motion.p>
          {/* <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div> */}
        </motion.div>
        {/* Scorll SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8955 33.9125C24.1885 34.2051 24.5856 34.3695 24.9997 34.3695C25.4137 34.3695 25.8109 34.2051 26.1038 33.9125L30.7913 29.2271C31.0673 28.9309 31.2176 28.5391 31.2105 28.1343C31.2033 27.7295 31.0393 27.3433 30.7531 27.057C30.4668 26.7708 30.0806 26.6068 29.6758 26.5996C29.271 26.5925 28.8792 26.7427 28.583 27.0187L24.9997 30.5958L21.4163 27.0146C21.2721 26.8654 21.0997 26.7465 20.909 26.6647C20.7183 26.5829 20.5133 26.5399 20.3058 26.5382C20.0983 26.5365 19.8926 26.5761 19.7006 26.6547C19.5086 26.7334 19.3342 26.8495 19.1876 26.9963C19.041 27.1431 18.925 27.3176 18.8465 27.5096C18.7681 27.7017 18.7286 27.9075 18.7305 28.1149C18.7324 28.3224 18.7756 28.5274 18.8576 28.718C18.9396 28.9086 19.0587 29.0809 19.208 29.225L23.8955 33.9125ZM24.9997 18.8646C24.5576 18.8646 24.1337 18.689 23.8212 18.3764C23.5086 18.0639 23.333 17.6399 23.333 17.1979C23.333 16.7559 23.5086 16.332 23.8212 16.0194C24.1337 15.7068 24.5576 15.5312 24.9997 15.5312C25.4417 15.5312 25.8656 15.7068 26.1782 16.0194C26.4907 16.332 26.6663 16.7559 26.6663 17.1979C26.6663 17.6399 26.4907 18.0639 26.1782 18.3764C25.8656 18.689 25.4417 18.8646 24.9997 18.8646ZM23.333 23.0646C23.333 23.2835 23.3761 23.5002 23.4599 23.7024C23.5436 23.9046 23.6664 24.0883 23.8212 24.2431C23.9759 24.3979 24.1597 24.5206 24.3619 24.6044C24.5641 24.6881 24.7808 24.7313 24.9997 24.7313C25.2185 24.7313 25.4353 24.6881 25.6375 24.6044C25.8397 24.5206 26.0234 24.3979 26.1782 24.2431C26.3329 24.0883 26.4557 23.9046 26.5395 23.7024C26.6232 23.5002 26.6663 23.2835 26.6663 23.0646C26.6663 22.6226 26.4907 22.1986 26.1782 21.8861C25.8656 21.5735 25.4417 21.3979 24.9997 21.3979C24.5576 21.3979 24.1337 21.5735 23.8212 21.8861C23.5086 22.1986 23.333 22.6226 23.333 23.0646Z"
              fill="white"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 4.1687C20.856 4.1687 16.8817 5.8149 13.9515 8.74516C11.0212 11.6754 9.375 15.6497 9.375 19.7937V30.2104C9.375 34.3544 11.0212 38.3287 13.9515 41.2589C16.8817 44.1892 20.856 45.8354 25 45.8354C29.144 45.8354 33.1183 44.1892 36.0485 41.2589C38.9788 38.3287 40.625 34.3544 40.625 30.2104V19.7937C40.625 15.6497 38.9788 11.6754 36.0485 8.74516C33.1183 5.8149 29.144 4.1687 25 4.1687ZM12.5 19.7937C12.5 16.4785 13.817 13.2991 16.1612 10.9549C18.5054 8.61066 21.6848 7.2937 25 7.2937C28.3152 7.2937 31.4946 8.61066 33.8388 10.9549C36.183 13.2991 37.5 16.4785 37.5 19.7937V30.2104C37.5 33.5256 36.183 36.705 33.8388 39.0492C31.4946 41.3934 28.3152 42.7104 25 42.7104C21.6848 42.7104 18.5054 41.3934 16.1612 39.0492C13.817 36.705 12.5 33.5256 12.5 30.2104V19.7937Z"
              fill="white"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* Follow */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/lakindu-kavishka-8a1356217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.webp" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://github.com/lakindulk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git.webp" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.instagram.com/lakindukavishka/profilecard/?igsh=MWlqaXcxZWc5czlpeg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.webp" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText"> FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Bubble */}
        <Speech />
        {/* Contact button */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="#contact"
          className="contactLink"
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.667 27.0833V9.375C16.667 8.5462 16.9962 7.75134 17.5823 7.16529C18.1683 6.57924 18.9632 6.25 19.792 6.25C20.6208 6.25 21.4156 6.57924 22.0017 7.16529C22.5878 7.75134 22.917 8.5462 22.917 9.375V25M22.917 23.9583V19.7917C22.917 18.9629 23.2462 18.168 23.8323 17.582C24.4183 16.9959 25.2132 16.6667 26.042 16.6667C26.8708 16.6667 27.6656 16.9959 28.2517 17.582C28.8378 18.168 29.167 18.9629 29.167 19.7917V25M29.167 21.875C29.167 21.0462 29.4962 20.2513 30.0823 19.6653C30.6683 19.0792 31.4632 18.75 32.292 18.75C33.1208 18.75 33.9156 19.0792 34.5017 19.6653C35.0877 20.2513 35.417 21.0462 35.417 21.875V25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                // eslint-disable-next-line react/no-unknown-property,
                react/no-unknown-property
                <path
                  d="M35.4167 23.9584C35.4167 23.1296 35.7459 22.3347 36.332 21.7486C36.918 21.1626 37.7129 20.8334 38.5417 20.8334C39.3705 20.8334 40.1653 21.1626 40.7514 21.7486C41.3374 22.3347 41.6667 23.1296 41.6667 23.9584V33.3334C41.6667 36.6486 40.3497 39.828 38.0055 42.1722C35.6613 44.5164 32.4819 45.8334 29.1667 45.8334H25H25.4333C23.3632 45.8337 21.3254 45.3199 19.5029 44.3381C17.6804 43.3563 16.1302 41.9373 14.9917 40.2084L14.5833 39.5834C13.9333 38.5861 11.6514 34.6084 7.7375 27.65C7.33844 26.9407 7.23184 26.1037 7.44038 25.317C7.64892 24.5303 8.15614 23.856 8.85417 23.4375C9.59798 22.9925 10.469 22.8082 11.3293 22.9139C12.1896 23.0195 12.9901 23.4091 13.6042 24.0209L16.6667 27.0834M10.4167 6.25002L8.33333 4.16669M8.33333 14.5834H6.25M29.1667 6.25002L31.25 4.16669M31.25 12.5H33.3333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading ...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero2.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
