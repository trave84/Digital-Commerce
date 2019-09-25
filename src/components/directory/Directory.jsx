import React from "react";
import MenuItem from "../menuItem/MenuItem";
import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "smartphones",
          imageURL: "img/smart-phones.jpg",
          id: 1
        },
        {
          title: "smartphones",
          imageURL: "img/smart-phones.jpg",
          id: 1
        },
        {
          title: "tablets",
          imageURL: "img/smart-phones.jpg",
          id: 1
        },
        {
          title: "laptops",
          imageURL: "img/smart-phones.jpg",
          id: 1
        },
        {
          title: "desktops",
          imageURL: "img/smart-phones.jpg",
          id: 1
        },
        {
          title: "accessories",
          imageURL: "img/accessories.jpg",
          id: 1
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;
