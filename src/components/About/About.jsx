import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="container-about">
          <h1>About</h1>
          <div className="card-box">
            <div className="box-wrap">
              <h2>About this </h2>
              <p>
                This blog app just made it with React for me to use like a
                profile that keep in portfolio and practice coding.
              </p>
              <img
                src="https://media.istockphoto.com/id/1135957645/photo/on-call-to-get-through-the-code.webp?b=1&s=170667a&w=0&k=20&c=mGpXJL3GvK7roupvnG2QasPeK1KFY4SWUKTvW7xbc2Q="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
