import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../Utils/Button";


const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = () => {
    axios
      .get(`https://react-crud-4a235-default-rtdb.firebaseio.com/blogs/${id}.json`)
      .then((res) => {
        const blogData = res.data;
        setTitle(blogData.title);
        setDescription(blogData.description);
        setAuthor(blogData.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogCreatedTime = new Date();
    axios
      .put(`https://react-crud-4a235-default-rtdb.firebaseio.com/blogs/${id}.json`, {
        title,
        description,
        author,
        blogCreatedTime
      })
      .then(() => {
        alert("Updated successfully");
        navigate('/');
      })
      .catch((err) => {
        console.error("Error updating blog:", err);
      });
  };

  return (
    <>
      <h1 className="mt-3 d-flex flex-row align-items-center justify-content-center">
        Edit Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitle} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            value={description}
            id="description"
            onChange={handleDescription} 
            rows="5"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            disabled
          />
        </div>
        {/* <button className="btn btn-primary" type="submit">
          Update
        </button> */}
        <Button className="btn btn-primary" >Update</Button>

      </form>
    </>
  );
};

export default EditBlog;