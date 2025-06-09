import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubleConatiner"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I craft beautiful UIs 💡",
            1000,
            "I build scalable frontends 🖥️",
            1000,
            "I design user experiences 🎨",
            1000,
            "I engineer digital products 🚀",
            1000,
            "I am a Software Engineer 🧑‍💻",
            1000,
            "I am a UI/UX Developer ✨",
            1000,
            "I am also a Photographer 📷",
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man2.webp" alt="" />
    </motion.div>
  );
};

export default Speech;
