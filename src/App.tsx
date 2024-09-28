import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./containers/Navigation/HorizontalNavBar";
import Sidebar from "./containers/Navigation/SideNavBar";
import ColonelAi from "./containers/colonelAi";
import NotFound from "./containers/notFound";

// Add navbar component here using routers
function App() {

  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div className="App">
      <div className="app-container">
      <Navbar toggle={toggle} />
      <div className="content-wrapper">
        <Sidebar isopen={isopen} toggle={toggle} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ColonelAi />} />
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
