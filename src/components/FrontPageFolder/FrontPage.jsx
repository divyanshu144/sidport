import React from "react";
import Shader from "./Shader";
import DragonPng from "../../assets/pig.jpg";
import FaviconBar from "../SharedFolder/FaviconBar";


class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
        <Shader />
        <img className="image" src={DragonPng}></img>
        <h1 className="name">Siddharth Gupta</h1>
        <section className="section">
          Allo! I'm a CS graduate who loves to regularly dive headfirst into new
          code things ;). Mainly a programmer, I use my skills to makewwwww
          games.
        </section>
        <FaviconBar></FaviconBar>

        </div>
      </div>
    );
  }
}

export default FrontPage;