import React from 'react';
import { Link } from 'react-router-dom';

function Project1Item(props) {
  return (
    <>
      <li className='Project1__item'>
        <Link className='Project1__item__link' to={props.path}>
          <figure className='Project1__item__pic-wrap' data-category={props.label}>
            <img
              className='Project1__item__img'
              alt='none'            
              src={props.src}
            />
          </figure>
          <div className='Project1__item__info'>
            <h5 className='Project1__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project1Item;
