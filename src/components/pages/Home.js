import React from 'react'
import './Home.css';

export default function Home() {
    return (
        <>
            <h1>Hello!</h1>  
            <hr></hr> 
            <div className="middle"><p>Hey, I'm a student in Computer Science degree from Moldova. This will be my personal blog 
                where I will describe my journey as a programmer, "Zero to Hero" from my own prospective.
                </p>
                <p >
                I'll write all my experience, all difficulties that I have and how I can overcome them,
                hopefully this blog can help you in developing your own programming skills or maybe show
                you my path that can be useful for you, so that you can create your own story!</p>
                <p >
                So, there is the post and projects part where I will post all my updates and different interesting things
                Have any questions? Scroll down below to my socials and ask me anything you want.</p>
                <h3>Enjoy and have fun!</h3>
                </div> 
                <div className="hacker">
                    <img alt="hackerman" src="https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg"></img>
                </div>
        </>
    )
}
