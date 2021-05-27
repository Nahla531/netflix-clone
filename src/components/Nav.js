import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transtionNanBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transtionNanBar);
    return () => window.removeEventListener("scroll", transtionNanBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
          alt=""
          onClick={() => history.push("/")}
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
