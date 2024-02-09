import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>&apos;Engage in dynamic conversations and unlock knowledge effortlessly with our GPT-3-powered chatbot. Seamlessly navigate complex queries and receive insightful responses tailored to your needs.&apos;</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="People" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="AI" />
    </div>
  </div>
);

export default Header;
