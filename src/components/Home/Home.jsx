import React from "react";
import "./Home.css";
import ContentBlog from "./ContentBlog";

function Home() {
  return (
    <>
      <div className="warp-home">
        <div className="container">
          <div className="flex">
            <div className="hero-header">
              <h1 className="header-blog-logo">Kconz - Blog</h1>
            </div>
            <img src="src/assets/images/home.svg" alt="" className="img-home" />
          </div>
          <ContentBlog></ContentBlog>
        </div>
      </div>
    </>
  );
}

export default Home;
