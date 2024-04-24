
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "../../Utils/Button";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const apiUrl = `https://react-crud-4a235-default-rtdb.firebaseio.com/blogs/${id}.json`;
        const response = await axios.get(apiUrl);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  },[id]);

  if (!blog) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    blog && (
      
      <div className="card w-100 h-100 mt-3">
        <div className="card-body">
          <h5 className="card-title">Title: {blog.title}</h5>
          <p className="card-text">Description: {blog.description}</p>
          <p className="card-text">Author: {blog.author}</p>
          <p className="card-text">Created At: {blog.blogCreatedTime}</p>
          <Link to="/" >
          <Button className="btn btn-primary">Back</Button>
          </Link>

        </div>
      </div>
    )
  );
};

export default SingleBlog;