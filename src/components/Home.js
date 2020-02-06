import React from 'react';
import { Slide } from 'react-slideshow-image';
import images1 from '../images/image1.jpeg';
import images2 from '../images/image2.jpg';
import images3 from '../images/image3.jpg';
import './App.css';

const slideImages = [
  images1,
  images2,
  images3
];

const properties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default class Home extends React.Component {
 render() {
    return (
      <div className="App" >
        <Slide {...properties}>
          <div className="each-slide" style={{height:600,alignItems:'center',justifyContent: 'center'}}  >
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:600,alignItems:'center',}}>
              <span style={{alignItems:'center',justifyContent: 'center'}}>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:600}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:600}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
 }
}