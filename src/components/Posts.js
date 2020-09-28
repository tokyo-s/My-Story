import React from 'react';
import './Posts.css';
import Post from './Post'
//import CardItem from './Post';
import data from "../projects.json";

function Posts() {
    return (
        <div className="cards">
            <h1>Last posts</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='card__itms'>
                        <Post
                            src='./pages/5.png'
                            text='My first post'
                            label='Adventure'
                            path='/services'
                            date='23/09/20'
                        />
                        <Post
                            src='images/img-2.jpg'
                            text='My second post'
                            label='Luxury'
                            path='/services'
                            date='23/09/20'
                        />
                    </ul>
                    <ul className='card__items'>
                        <Post
                            src='images/img-3.jpg'
                            text='My third post'
                            label='Mystery'
                            path='/services'
                            date='23/09/20'
                            />
                            
                        <Post
                            src='images/img-4.jpg'
                            text='My fourth post'
                            label='Mystery'
                            path='/products'
                            date='23/09/20'
                            />
                        <Post 
                            src='images/img-8.jpg'
                            text='My fifth post'
                            label='Adrenaline'
                            path='/sign-up'
                            date='23/09/20'
                            />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Posts;
