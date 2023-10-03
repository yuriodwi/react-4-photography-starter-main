//import images
import WomanImg from "../img/home/woman.png";
//import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transition";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-20%" }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Los Angeles, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              hire me
            </Link>
          </motion.div>
          {/* img */}
          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "10%" }}
            transition={transition1}
            className="flex justify-end max-h-96 lg:max-h-max"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              className="relative lg:right-40 overflow-hidden"
            >
              <img src={WomanImg} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
