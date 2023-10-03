//import contact
import WomanImg from "../img/contact/woman.png";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transition";
//import useform
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-left lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-gradient-whiteblue absolute bottom-0 left-0 right-0 top-72 -z-10"></div>
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
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/c1e57379a7ded801280f1b62c687c5fb"
              method="POST"
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-x-10">
                <div className="flex w-full flex-col">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your name"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="text-[#757879] pl-3 mt-1 ">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
                <div className="flex w-full flex-col">
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your email address"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="text-[#757879] pl-3 mt-1">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.message && (
                <p className="text-[#757879] pl-3 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 character."}
                </p>
              )}
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
