import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./containers/Navigation/HorizontalNavBar";
import Sidebar from "./containers/Navigation/SideNavBar";
// import NavBar from "./containers/Navigation";

import Home from "./containers/home";
// import Post from "./containers/post";
// import AboutUs from "./containers/aboutUs";
import AboutUs from "./containers/aboutus";
// import NotFound from "./containers/notFound";

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
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Home />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>
      </main>
  </div>
  );
}

export default App;
