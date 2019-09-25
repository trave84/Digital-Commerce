import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkURL}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageURL})`
      }}
      className="background-img"
    ></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">BUY NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
