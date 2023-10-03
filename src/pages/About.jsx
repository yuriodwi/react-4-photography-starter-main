//import images
import WomanImg from "../img/about/woman.png";
//import link
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              tempore rem alias repellat sit, qui mollitia odit{" "}
              <b>cumque explicabo</b>
              quae? Quisquam facilis adipisci repellat fugiat quae id
              perferendis molestiae dicta?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              consequatur, nostrum eaque expedita iure animi praesentium commodi
              ipsam. Quo, repellendus.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
