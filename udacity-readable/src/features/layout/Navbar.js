import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  state = {
    activeItem: "posts"
  };

  handleMenuChange = menuItem => {
    this.setState({ activeItem: menuItem });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu style={{ borderRadius: 0 }} inverted>
        <Menu.Item header>READABLE</Menu.Item>

        <Menu.Item
          as={Link}
          to="/"
          name="posts"
          onClick={this.handleMenuChange}
          active={activeItem === "addPost"}
        >
          Posts
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/posts/add"
          name="addPost"
          onClick={this.handleMenuChange}
          active={activeItem === "addPost"}
        >
          Add Post
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
