import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import React, { useState } from "react";

import TodoList from "./TodoList";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";

const App = () => {
  const [h, seth] = useState(true);
  const [s, sets] = useState(false);

  function handleH() {
    seth(true);
    sets(false);
  }

  function handleS() {
    seth(false);
    sets(true);
  }

  return (
    <Router>
      <div>
        <div  className="side-bar" >
          <Link to="/">
            <button className="back-button" >BACK</button>
          </Link>
          <Link to="/">
            <button className="back-button" >🏠</button>
          </Link>
          <div className="title" ><img className="pj" src="pj.png" alt="" />
          <h1 className="heading" >GKs In Pajamas</h1></div>
          
        </div>
        {h ? (
          <div className="home-page">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/Post1" element={<Post1 />} />
              <Route path="/Post2" element={<Post2 />} />
              <Route path="/Post3" element={<Post3 />} />
              <Route path="/Post4" element={<Post4 />} />
              <Route path="/Post5" element={<Post5 />} />
            </Routes>
          </div>
        ) : null}
        {s ? <div className="starred">something cool</div> : null}
      </div>
    </Router>
  );
};

export default App;
