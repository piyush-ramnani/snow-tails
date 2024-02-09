import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Cause from "./components/Cause";
import Tips from "./components/Tips";
import Ambassodors from "./components/ambassodors";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Rules />
        <Cause />
        <Tips />
        <Ambassodors />
        <Contact />
      </div>
    </>

    //Video player section
  );
}

export default App;
