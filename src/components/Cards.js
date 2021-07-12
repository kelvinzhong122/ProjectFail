import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CAR PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/MCLAREN Hyper 8.jpg'
              text='MCLAREN HYPER 1'
              path='/Project1'
            />
            <CardItem
              src='images/REMA 2020 8.jpg'
              text='NISSAN REMA'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/RESIZED THUNDERBIRD 6 2.jpg'
              text='FORD THUNDERBIRD 2027'
              path='/services'
            />
            <CardItem
              src='images/FINAL 20.jpg'
              text='TESLA MODEL 3 NEXT GEN INTERIOR'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
