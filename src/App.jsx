import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import NoPage from "./components/NoPage/NoPage";
import dataBlogs from "./data/dataBlogs";
import Blog from "./components/Blog/Blog";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className={theme}>
      {/* <Header ></Header> */}
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs dataBlogs={dataBlogs} />}></Route>
          <Route path="*" element={<NoPage />}></Route>
          {/* change route */}
          <Route path="/home" element={<Navigate to="/"/>}></Route>
          <Route path="/blog/:id" element={<Blog dataBlogs={dataBlogs}/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
