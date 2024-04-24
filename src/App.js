import React, { Suspense, lazy, useState,useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
const HomeComponent = lazy(() => import("./components/Home/Home"));
const CreateBlogComponent = lazy(() => import("./components/CreateBlog/CreateBlog"));
const EditBlogComponent = lazy(() => import("./components/EditBlog/EditBlog"));
const SingleBlogComponent = lazy(() => import("./components/SingleBlog/SingleBlog"));





function App() {
  const [blogs, setBlogs] = useState([]);
  const [count,setCount] = useState(10)

  const fetchBlogs = () => {
    axios
      .get(
        `https://react-crud-4a235-default-rtdb.firebaseio.com/blogs.json?orderBy="$key"&limitToFirst=${count}`
      )
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBlogs();
  },[count]);



  return (
    <Router>
      <div className="container-fluid">
        <Header />
          <Routes>
            <Route exact path="/" element={<Suspense fallback={<div>Loading...</div>}><HomeComponent setCount= {setCount} blogs = {blogs} /></Suspense>} />
            <Route exact path="/new" element={<Suspense fallback={<div>Loading...</div>}><CreateBlogComponent /></Suspense>} />
            <Route exact path="/edit/:id" element={<Suspense fallback={<div>Loading...</div>}><EditBlogComponent /></Suspense>} />
            <Route exact path="/blog/:id" element={<Suspense fallback={<div>Loading...</div>}><SingleBlogComponent /></Suspense>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;