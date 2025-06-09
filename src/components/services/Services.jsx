import { useState, useEffect } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import PhoneModalContainer from "./phone/PhoneModalContainer";
import PersonalComputerModalContainer from "./Machine/PersonalComputerModalContainer";
import { motion } from "motion/react";

const ServiceBoxes = {
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

const Services = () => {
  const [selected, setSelected] = useState("who");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === selected) return;

    setIsLoading(true);
    setSelected(tab);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services">
      <div className="sSection left">
        <motion.div
          variants={ServiceBoxes}
          initial="initial"
          animate="animate"
          className="title"
        >
          {" "}
          Code, Creativity & Craftsmanship
        </motion.div>
        <motion.div
          variants={ServiceBoxes}
          initial="initial"
          animate="animate"
          onClick={() => handleTabChange("who")}
        >
          <div className="sectionContainer">
            <div className="subTitle">
              <span className="subTitletext">👨‍💻 Who I Am</span>{" "}
              <span className="read-more-btn">
                {selected === "who" ? (
                  <></>
                ) : (
                  <>
                    <button>
                      <span className="arrow-icon">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.515314 1.45882C0.455169 1.39517 0.408149 1.3203 0.376939 1.23848C0.345729 1.15666 0.330939 1.0695 0.333415 0.981961C0.335891 0.894426 0.355585 0.808236 0.391371 0.728312C0.427156 0.648389 0.478334 0.576296 0.541981 0.51615C0.605628 0.456005 0.6805 0.408985 0.762319 0.377775C0.844138 0.346564 0.931303 0.331775 1.01884 0.334251C1.10637 0.336727 1.19256 0.35642 1.27249 0.392206C1.35241 0.427992 1.4245 0.47917 1.48465 0.542817L7.15131 6.54282C7.26834 6.6666 7.33354 6.83048 7.33354 7.00082C7.33354 7.17116 7.26834 7.33504 7.15131 7.45882L1.48465 13.4595C1.4249 13.5245 1.35282 13.577 1.27261 13.614C1.19239 13.6509 1.10563 13.6716 1.01736 13.6747C0.929101 13.6779 0.841095 13.6634 0.758457 13.6323C0.675819 13.6011 0.600197 13.5538 0.535983 13.4932C0.471769 13.4326 0.420244 13.3598 0.3844 13.279C0.348556 13.1983 0.329107 13.1113 0.327184 13.023C0.325261 12.9347 0.340902 12.8469 0.373198 12.7647C0.405494 12.6825 0.453802 12.6075 0.515314 12.5442L5.74998 7.00082L0.515314 1.45882Z"
                            fill="#0e051a"
                          />
                        </svg>
                      </span>
                      <span className="button-text">Read More</span>
                    </button>
                  </>
                )}
              </span>
            </div>
            {selected === "who" && (
              <div className="description show">
                A passionate Frontend Developer with a knack for turning complex
                problems into clean, elegant interfaces. With a background in
                Software Engineering and hands-on experience leading UI
                development, I bring creativity, discipline, and energy to every
                project I take on.
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          variants={ServiceBoxes}
          initial="initial"
          animate="animate"
          onClick={() => handleTabChange("responsive")}
        >
          <div className="sectionContainer">
            {" "}
            <div className="subTitle">
              <span className="subTitletext">
                🎨 Crafting Seamless, Responsive UIs{" "}
              </span>{" "}
              <span className="read-more-btn">
                {selected === "responsive" ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <button>
                      <span className="arrow-icon">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.515314 1.45882C0.455169 1.39517 0.408149 1.3203 0.376939 1.23848C0.345729 1.15666 0.330939 1.0695 0.333415 0.981961C0.335891 0.894426 0.355585 0.808236 0.391371 0.728312C0.427156 0.648389 0.478334 0.576296 0.541981 0.51615C0.605628 0.456005 0.6805 0.408985 0.762319 0.377775C0.844138 0.346564 0.931303 0.331775 1.01884 0.334251C1.10637 0.336727 1.19256 0.35642 1.27249 0.392206C1.35241 0.427992 1.4245 0.47917 1.48465 0.542817L7.15131 6.54282C7.26834 6.6666 7.33354 6.83048 7.33354 7.00082C7.33354 7.17116 7.26834 7.33504 7.15131 7.45882L1.48465 13.4595C1.4249 13.5245 1.35282 13.577 1.27261 13.614C1.19239 13.6509 1.10563 13.6716 1.01736 13.6747C0.929101 13.6779 0.841095 13.6634 0.758457 13.6323C0.675819 13.6011 0.600197 13.5538 0.535983 13.4932C0.471769 13.4326 0.420244 13.3598 0.3844 13.279C0.348556 13.1983 0.329107 13.1113 0.327184 13.023C0.325261 12.9347 0.340902 12.8469 0.373198 12.7647C0.405494 12.6825 0.453802 12.6075 0.515314 12.5442L5.74998 7.00082L0.515314 1.45882Z"
                            fill="#0e051a"
                          />
                        </svg>
                      </span>
                      <span className="button-text">Read More</span>
                    </button>
                  </>
                )}
              </span>
            </div>
            {selected === "responsive" && (
              <div className="description show">
                From dashboards to learning platforms, I specialize in building
                responsive, high-performance interfaces using React, Vue.js, and
                React Native. My focus is always on accessibility, performance,
                and delivering smooth experiences across devices. If it’s clean,
                fast, and user-friendly — that’s my signature.
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          variants={ServiceBoxes}
          initial="initial"
          animate="animate"
          onClick={() => handleTabChange("designing")}
        >
          <div className="sectionContainer">
            <div className="subTitle">
              <span className="subTitletext">
                🤝 UI Engineering with Heart & Insight{" "}
              </span>
              <span className="read-more-btn">
                {selected === "designing" ? (
                  <></>
                ) : (
                  <>
                    <button>
                      <span className="arrow-icon">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.515314 1.45882C0.455169 1.39517 0.408149 1.3203 0.376939 1.23848C0.345729 1.15666 0.330939 1.0695 0.333415 0.981961C0.335891 0.894426 0.355585 0.808236 0.391371 0.728312C0.427156 0.648389 0.478334 0.576296 0.541981 0.51615C0.605628 0.456005 0.6805 0.408985 0.762319 0.377775C0.844138 0.346564 0.931303 0.331775 1.01884 0.334251C1.10637 0.336727 1.19256 0.35642 1.27249 0.392206C1.35241 0.427992 1.4245 0.47917 1.48465 0.542817L7.15131 6.54282C7.26834 6.6666 7.33354 6.83048 7.33354 7.00082C7.33354 7.17116 7.26834 7.33504 7.15131 7.45882L1.48465 13.4595C1.4249 13.5245 1.35282 13.577 1.27261 13.614C1.19239 13.6509 1.10563 13.6716 1.01736 13.6747C0.929101 13.6779 0.841095 13.6634 0.758457 13.6323C0.675819 13.6011 0.600197 13.5538 0.535983 13.4932C0.471769 13.4326 0.420244 13.3598 0.3844 13.279C0.348556 13.1983 0.329107 13.1113 0.327184 13.023C0.325261 12.9347 0.340902 12.8469 0.373198 12.7647C0.405494 12.6825 0.453802 12.6075 0.515314 12.5442L5.74998 7.00082L0.515314 1.45882Z"
                            fill="#0e051a"
                          />
                        </svg>
                      </span>
                      <span className="button-text">Read More</span>
                    </button>
                  </>
                )}
              </span>
            </div>
            {selected === "designing" && (
              <div className="description show">
                Beyond writing code, I deeply value UX principles and work
                closely with designers and teams to craft intuitive user flows.
                I bring empathy into engineering — I listen, adapt, and always
                aim to make things not just functional but delightful. I believe
                great UIs start with great collaboration.
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <div className="sSection right">
        {isLoading ? (
          <div className="loading-container">
            <img src="/loading.gif" alt="Loading" className="loading-gif" />
          </div>
        ) : (
          <>
            {selected === "who" && <ComputerModelContainer />}
            {selected === "responsive" && (
              <>
                {" "}
                <PhoneModalContainer />{" "}
              </>
            )}
            {selected === "designing" && (
              <>
                {" "}
                <PersonalComputerModalContainer />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
