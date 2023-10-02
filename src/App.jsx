//import components
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
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
