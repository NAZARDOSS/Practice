import React, { Component } from "react";

class Post extends Component {
  state = {
    title1: "LESSON 2",
    title2: "LESSON 1",
    img1: "https://learn.corel.com/wp-content/uploads/2022/01/alberta-2297204_1280.jpg",
    img2: "https://www.westend61.de/images/0001353434pw/aerial-view-of-lauterbrunnen-interlaken-oberhaslicanton-of-bern-switzerland-with-a-view-on-the-valley-mountains-and-waterfalls-AAEF07896.jpg",
    marked: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        marked: !prevState.marked,
      }));
    }, 3000);
  }

  render() {
    const { title1, title2, img1, img2, marked } = this.state;
    return (
      <div>
        <h1>{marked ? title1 : title2}</h1>
        <img
          src={marked ? img1 : img2}
          alt={title1}
          style={{ width: "500px", height: "400px" }}
        />
      </div>
    );
  }
}

export default Post;
