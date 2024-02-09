import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Comprehensive Knowledge Access: ',
    text: 'Our website serves as a one-stop destination, granting easy access to a vast array of information for informed decision-making.',
  },
  {
    title: 'Personalized Learning Experience: ',
    text: ' Tailoring content to individual preferences, our platform ensures engaging learning experiences that cater to diverse learning styles..',
  },
  {
    title: 'Collaborative Community Engagement',
    text: 'Fostering interaction and knowledge sharing, our website creates a dynamic community where users can connect, collaborate, and grow together.',
  },
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
