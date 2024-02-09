import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Our website embodies limitless possibilities, offering a dynamic platform for exploration, interaction, and growth. From accessing vast knowledge repositories to fostering collaborative communities, it serves as a gateway to endless opportunities for learning, innovation, and connection. With its adaptable design and diverse functionalities, the potential of our website knows no bounds..</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
