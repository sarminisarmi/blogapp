import React from 'react';
import { Link } from 'react-router-dom';


const BlogNav = () => (
  <nav className="blog-nav">
    <div className="logo">Blog platform</div>
    <ul>
      <li><Link to="/post1">JavaScript</Link></li>
      <li><Link to="/post2">Data Structure</Link></li>
      <li><Link to="/post3">Algorithm</Link></li>
      <li><Link to="/post4">Computer Network</Link></li>
    </ul>
    <input type="text" placeholder="Search" />
  </nav>
);

export default BlogNav;