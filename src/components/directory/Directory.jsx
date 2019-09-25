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
          imageURL: "img/smart-phone.jpg",
          id: 1
        },
        {
          title: "tablets",
          imageURL: "img/tablet.jpg",
          id: 2
        },
        {
          title: "laptops",
          imageURL: "img/laptop.jpg",
          id: 3
        },
        {
          title: "desktops",
          imageURL: "img/desktop.jpg",
          size: "large",
          id: 4
        },
        {
          title: "accessories",
          imageURL: "img/accessories.jpg",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id, size }) => (
          <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
