import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Utils/Button";

const Home = ({blogs,setCount}) => {
  const navigate = useNavigate();

  const handleBlogClick = (firebaseKey) => {
    navigate(`/blog/${firebaseKey}`);
  };

  const handleEditClick = (firebaseKey) => {
    navigate(`/edit/${firebaseKey}`);
  };

  return (
    <>
      {blogs === null || blogs.length <= 0 ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Blogs are not available</h1>
        </div>
      ) : (
        <>
          <h1 className="mt-3">All Blogs</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {Object.keys(blogs).map((firebaseKey, i) => (
              <div key={i} className="col">
                <div className="card blog-card mt-2 h-auto w-auto">
                  <div className="card-body">
                    <h5 className="card-title">
                      Title: {blogs[firebaseKey].title}
                    </h5>
                    <p className="card-text">
                      Description: {blogs[firebaseKey].description.slice(0, 20)}
                      ...
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                     
                      <Button className="btn btn-outline-primary"  onClick={() => handleBlogClick(firebaseKey)}  >View</Button>

                      <Button className="btn btn-outline-warning"  onClick={() => handleEditClick(firebaseKey)} >Edit</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <Button className="btn btn-primary mt-3" onClick={() => setCount((previous) => previous + 10)}>Load More</Button>
    
          </div>
        </>
      )}
    </>
  );
};

export default Home;
