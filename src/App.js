import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BlogNav from './component/BlogNav';
import Posts from './component/Posts';
import Post1 from './component/Post1';
import Post2 from './component/Post2';
import Post3 from './component/Post3';
import Post4 from './component/Post4';

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post1" element={<Post1 />} />
            <Route path="/post2" element={<Post2 />} />
            <Route path="/post3" element={<Post3 />} />
            <Route path="/post4" element={<Post4 />} />
          </Routes>
        
        </div>
      </div>
    </Router>
  );
}

export default App;