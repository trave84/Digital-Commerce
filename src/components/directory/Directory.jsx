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
          imageURL: "assets/img/smart-phone.jpg",
          linkURL: "smartphones",
          id: 1
        },
        {
          title: "tablets",
          imageURL: "assets/img/tablet.jpg",
          linkURL: "tablets",
          id: 2
        },
        {
          title: "laptops",
          imageURL: "assets/img/laptop.jpg",
          linkURL: "laptops",
          id: 3
        },
        {
          title: "desktops",
          imageURL: "assets/img/desktop.jpg",
          size: "large",
          linkURL: "desktops",
          id: 4
        },
        {
          title: "accessories",
          imageURL: "assets/img/accessories.jpg",
          size: "large",
          linkURL: "accessories",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
