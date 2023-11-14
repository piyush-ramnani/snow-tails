import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rules from "./components/rules";
import Cause from "./components/cause";
import Tips from "./components/Tips";
import Ambassodors from "./components/ambassodors";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    //NavBar
    <>
      <div className="min-h-screen">
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
