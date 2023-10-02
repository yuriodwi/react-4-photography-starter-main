//import components
import { AnimRoutes, Header } from "./components";
//import router
import { BrowserRouter as Router } from "react-router-dom";
//import motion
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
