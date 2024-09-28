import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./containers/Navigation/HorizontalNavBar";
import Sidebar from "./containers/Navigation/SideNavBar";
// import NavBar from "./containers/Navigation";

import Home from "./containers/home";
// import Post from "./containers/post";
// import AboutUs from "./containers/aboutUs";
import AboutUs from "./containers/aboutus";
import Login from "./containers/Login";
// import NotFound from "./containers/notFound";
// import AskTheColonel from "./containers/home";
import ColonelAi from "./containers/colonelAi";
import NotFound from "./containers/notFound";

// Add navbar component here using routers
function App() {

  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };


  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/post/:id" element={<Post />} />
    //     <Route path="/aboutus" element={<AboutUs />} />
    //     <Route path="*" element={<NotFound />} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </>
    <div className="App">
      {/* <NavBar /> */}
      {/* <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Home />} />
          <Route path="/contact" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ColonelAi" element={<ColonelAi />} />
        </Routes>
      </main> */}

      <div className="app-container">
      <Navbar toggle={toggle} />
      <div className="content-wrapper">
        <Sidebar isopen={isopen} toggle={toggle} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ColonelAi />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Home />} />
            <Route path="/contact" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ColonelAi" element={<ColonelAi />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  </div>
  );
}

export default App;
