import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css'

export default function Post(props){
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
              <div className="post">
                 <h2 align="center" >{props.text}</h2>
                 <div className="i"><img className="image"src={props.src} alt="img" className="cards__item__img" /></div>
                <div className="date">{props.date}</div>
              </div>
                </Link>
            </li>
        </>
    );
}
