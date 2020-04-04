import React from 'react';
import BlogPosts from './BlogPosts'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function Blog() {
  return (
    <div className="Blog">
      <Navbar />
      <BlogPosts />
    </div>
  );
}

export default Blog;
