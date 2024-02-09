import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Experience the future of natural language interaction on our website powered by GPT-3, where your words are transformed into intelligent responses. Explore limitless possibilities in communication and creativity with our cutting-edge AI technology.." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text='Engage in dynamic conversations and unlock knowledge effortlessly with our GPT-3-powered chatbot. Seamlessly navigate complex queries and receive insightful responses tailored to your needs' />
      <Feature title="Knowledgebase" text="Explore our website's comprehensive knowledge base, your go-to hub for insights and expertise. Streamline your learning, decision-making, and collaboration with easy access to curated information tailored to your needs." />
      <Feature title="Education" text="Embark on a journey of discovery through our educational platform, where learning knows no bounds. Empower yourself with essential skills and knowledge, personalized to fuel your growth and success in a dynamic world." />
    </div>
  </div>
);

export default WhatGPT3;
