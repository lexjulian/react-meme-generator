import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/lbij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeState) => {
      return {
        ...prevMemeState,
        [name]: value,
      };
    });
  }

  const [allMemeImages, setAllMemeImages] = useState({});

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemeImages[randomNumber].url,
      };
    });
  }

  return (
    <section className="App-meme__container">
      <div className="meme-form">
        <div className="meme-input__box">
          <input
            className="meme-input1"
            type="text"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            className="meme-input2"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>

        <button onClick={getImage} className="meme-button">
          Get a new meme image
        </button>
      </div>
      <section className="meme-image__box">
        <img
          src={meme.randomImage}
          className="meme-image"
          alt={meme.randomImage}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </section>
    </section>
  );
}
