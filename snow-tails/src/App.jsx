import "./App.css";
import Form from "./form";

function App() {
  return (
    //NavBar
    <>
      <div class="w-full shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div class="ml-4 h-14 max-w-6xl">
          <ul class="relative mx-12 flex h-full flex-row items-center justify-between text-[16px] font-medium sm:text-[12px]">
            <li class="hover:cursor-pointer">Logo</li>
            <li class="hover:cursor-pointer">Home</li>
            <li class="hover:cursor-pointer">Services</li>
            <li class="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div
        id="register"
        class="container none p-10 max-h-screen max-w-screen flex align-items-center justify-center bg-slate-100"
      >
        <button
          class="middle none center w-full rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Register
        </button>
      </div>

      <div
        id="video_section"
        class="container none p-10 max-h-screen max-w-screen w-screen h-screen flex align-items-center justify-center bg-slate-100"
      >
        video
      </div>
      <div
        id="About"
        class="container none max-h-screen max-w-screen w-screen h-screen flex align-items-center justify-center bg-slate-100"
      >
        About
      </div>
      <div
        id="testimonials"
        class="container none max-h-screen max-w-screen w-screen h-screen flex align-items-center justify-center bg-slate-100"
      >
        Testimonials
      </div>
      <div>
        <Form />
      </div>
    </>

    //Video player section
  );
}

export default App;
