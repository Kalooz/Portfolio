import Layout from "../components/Layout";
import React from "react";
import { graphql } from "gatsby";

const BlogPost = (props) => {
  return (
    <Layout>
      <div className="content">
        <h1>{props.title}</h1>
      </div>
    </Layout>
  );
};

export default BlogPost;
