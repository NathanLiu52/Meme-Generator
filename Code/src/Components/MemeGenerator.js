import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      allMemeImgs: [],
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randInt = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMeme = this.state.allMemeImgs[randInt].url;
    this.setState({
      randomImage: randMeme,
    });
  }

  render() {
    return (
      <div className="meme-container">
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            placeholder="bottom text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
