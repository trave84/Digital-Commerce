import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imageURL, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageURL})`
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">BUY NOW</span>
    </div>
  </div>
);

export default MenuItem;
