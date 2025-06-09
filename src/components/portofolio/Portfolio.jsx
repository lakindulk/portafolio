import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Three Thirty",
    desc: "This platform connects instructors, parents, and schools to manage after-school clubs efficiently. Built with React.js and styled with Material-UI, it enables smooth communication, scheduling, and enrollment for extracurricular activities.",
    lang: "React JS | MUI | CSS",
    link: "https://www.threethirty.co.uk/home",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Outclass/Fence Club 43",
    desc: "A learning management system for managing clubs, providers, and the activities of registered parents. Use the following test credentials to log in: Email - dhanukabalasooraya@gmail.com, Password - 12345678.",
    lang: "React JS | MUI | CSS | Firestore | Firebase cloud funtions",
    link: "https://app-dev.outclass.io/",
  },
  {
    id: 3,
    img: "/p3.png",
    title: "HolidaySri (demo)",
    desc: "HolidaySri is a tourism management system that lets you explore locations, events, rides, partners, and book accommodations in Sri Lanka.",
    lang: "Vue JS | MUI | CSS | Node | MongoDB",
    link: "https://holidaysri-dhanukadbs-projects.vercel.app/",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "Handyman Lanka",
    desc: "Redefining repair, maintenance, and construction services in Sri Lanka by introducing a globally recognized business model tailored to local needs. Delivered reliable, tech-driven solutions backed by expert engineering to households, offices, and industrial spaces—building lifelong trust through quality and innovation.",
    lang: "Wordpress | CSS ",
    link: "https://www.handymanlanka.lk/",
  },
  {
    id: 5,
    img: "/p5.png",
    title: "Publications : InCarto",
    desc: "InCarto is location intelligence based e-commerce platform that address many povital issues in real state decision making .This was developed with association of SLIIT as the final year reseach project .",
    lang: "Ant Design | Python | Flask | React.js | JavaScript",
    link: "https://ieeexplore.ieee.org/document/9952023/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.p variants={textVariants}>{item.lang}</motion.p>
        <motion.a
          variants={textVariants}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
