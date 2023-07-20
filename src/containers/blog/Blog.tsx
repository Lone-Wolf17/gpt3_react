import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { Blog01Image, Blog02Image, Blog03Image, Blog04Image, Blog05Image } from "../../constants/image_assets";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={Blog01Image}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={Blog02Image}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog03Image}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog04Image}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog05Image}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
