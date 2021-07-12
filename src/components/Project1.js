import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './Project1.css'
import Project1 from './Project1Item';
import Project1Item from './Project1Item';

function Project12() {
  return (
    <div className='project1'>
      <h1>MCLAREN HYPER 1</h1>
      <div className='Project1__container'>
        <div className='Project1__wrapper'>
          <ul className='Project1__items'>
            <Project1Item
              src='images/HYPER SKETCH UPDATE 1.jpg'
            />
          </ul>
          <ul className = 'Project1_items'>
            <Project1Item
              src='images/MCLAREN 1.jpg'
            />
          </ul>
          <ul className='Project1__items'>
            <Project1Item
              src='images/MCLAREN 2.jpg'
            />
          </ul>
            <ul className = 'Project1_items'>
            <Project1Item
              src='images/MCLAREN 3 view final edit 1.jpg'
            />
          </ul>
          <ul className = 'Project1_items'>
            <Project1Item
              src='images/MCLAREN 3.jpg'
            />
          </ul>
          <ul className = 'Project1_items'>
            <Project1Item
              src='images/MCLAREN 4.jpg'
            />            
          </ul>
          <ul className = 'Project1_items'>
            <Project1Item
              src='images/MCLAREN 5.jpg'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project12;
