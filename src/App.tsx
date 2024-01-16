import { useState } from "react";
import "./App.css";
import NavLinks from "./components/NavLinks";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [about, setAbout] = useState(true)


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  if (about ) {
    return (
      <>
      {/* Sidebar and Content for Medium and Large Screens */}
      <div className="hidden lg:flex min-h-screen">
        <nav className="w-1/4 flex-none ... p-3 m-3">
          <About />
          <NavLinks about={about} setAbout={setAbout}/>
        <Footer />

        </nav>
        
        <main className="flex-1 min-w-0 overflow-auto ... bg-lime-400 p-3 m-3">
          {/* Consider breaking down the content into separate components */}
          <About />
        </main>
      </div>

      {/* Sidebar with Toggle Button for Small Screens */}
      <div className="lg:hidden min-h-screen">
        <button className="text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? "-" : "+"}
        </button>
        <p>Indie is a lifestyle, not a genre - Matthew Ellis</p>
        <div className={` ${isSidebarOpen ? "block" : "hidden"}`}>
          <nav className="w-7/8 ... p-3 m-3">
            <NavLinks about={about} setAbout={setAbout} />
          </nav>
        </div>
        <main className="flex-1 min-w-0 overflow-auto ... bg-lime-500 p-3 m-3 text-black">
      <About />
        </main>
        <Footer />
      </div>
    </>
    )
  }

  return (
    <>
      {/* Sidebar and Content for Medium and Large Screens */}
      <div className="hidden lg:flex min-h-screen">
        <nav className="w-1/4 flex-none ... p-3 m-3">
          <About />
          <NavLinks about={about} setAbout={setAbout} />
        </nav>
        <main className="flex-1 min-w-0 overflow-auto ... bg-lime-400 p-3 m-3">
          {/* Consider breaking down the content into separate components */}
          <p>Maybe main is a component?</p>
          <p>Conditionally render based on state from what is clicked in the nav bar.</p>
          <p>Set 'About' to be true on page load.</p>
        </main>
        <Footer />
      </div>

      {/* Sidebar with Toggle Button for Small Screens */}
      <div className="lg:hidden min-h-screen">
        <button className="text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? "-" : "+"}
        </button>
        <p>Indie is a lifestyle, not a genre - Matthew Ellis</p>
        <div className={` ${isSidebarOpen ? "block" : "hidden"}`}>
          <nav className="w-7/8 ... p-3 m-3">
            <NavLinks setAbout={setAbout} about={about}/>
          </nav>
        </div>
        <main className="flex-1 min-w-0 overflow-auto ... bg-lime-500 p-3 m-3 text-black">
          {/* Similar to the content in the large screen section */}
          <p>Maybe main is a component?</p>
          <p>Conditionally render based on state from what is clicked in the nav bar.</p>
          <p>Set 'About' to be true on page load.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
