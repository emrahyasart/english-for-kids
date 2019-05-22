import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as setLandingPageAction from "../state/actions/setLandingPage";

class Navbar extends React.Component {
  setSection = e => {
    setLandingPageAction.setSectionName(e.currentTarget.id);
  };

  render() {
    return (
      <div className="nav">
        <a href="/">Home</a>
        <a
          href="https://github.com/atrincas/english-for-kids/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <div className="dropdown">
          <button className="dropbtn" style={{ width: "50%" }}>
            Sections
          </button>
          <div className="dropdown-content">
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="colors"
              style={{ color: "black" }}
            >
              Colors
            </Link>
            <br />
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="fruits"
              style={{ color: "black" }}
            >
              Fruits
            </Link>
            <br />
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="clothes"
              style={{ color: "black" }}
            >
              Clothes
            </Link>
            <br />
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="drinks"
              style={{ color: "black" }}
            >
              Drinks
            </Link>
            <br />
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="animals"
              style={{ color: "black" }}
            >
              Animals
            </Link>
            <br />
            <Link
              to="/quiz"
              onClick={this.setSection}
              id="partsOfBody"
              style={{ color: "black" }}
            >
              PartsofBody
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar