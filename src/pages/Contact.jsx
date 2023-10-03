//import contact
import WomanImg from "../img/contact/woman.png";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transition";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"></div>
          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50%" }}
            transition={transition1}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                  name=""
                  id=""
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                  name=""
                  id=""
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
                name=""
                id=""
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </motion.div>
          {/* image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            className="flex-1"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
