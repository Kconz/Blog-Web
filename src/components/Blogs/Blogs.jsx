import React from "react";
import "./Blogs.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Blogs(props) {
  const [search, setSearch] = useState("");
  const { dataBlogs } = props;
  const [filterBlogs, SetFilterBlogs] = useState([]);

  useEffect(() => {
    // filter blog in state search
    const resultSearch = dataBlogs.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
    SetFilterBlogs(resultSearch);
  }, [search]);
  return (
    <>
      <div className="container">
        <div className="bg">
          <div className="warper">
            <h1>Blogs</h1>
            <div className="input-search">
              <input
                type="text"
                className="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <BsSearch />
              </button>
            </div>
          </div>

          <section className="blog-article">
            <div className="blog-wrap">
              {filterBlogs.map((data) => (
                <Link to={`/blog/${data.id}`} key={data.id}>
                  <div className="blog-card">
                    <h2>{data.title}</h2>
                    {/* show only 250 char */}
                    <p>{data.content.substring(0, 250)}</p>
                    <hr />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Blogs;
