import React from 'react';
import './theproject.css';
//import Projects from '../Projects'

export default function TheProject() {
    return (
        <>
              <h1>Snakes && Ladders</h1>
              <div className="content">
                  <div className="text"><p>
That's acutally my first game that I made,
I was inspired by the <a href="https://www.youtube.com/watch?v=5tvER0MT14s" target="_blank">snake game</a> from Tech with Tim channel, and the <a href="Snake and ladders" target="_blank">Snake and ladders</a> problem from codewars.<br/>
These helped me understanding some basic concepts of the pygame library and even some basic python concepts.<br/><br/>
<strong>Here is the game description for those who don't know the game</strong><br/><br/> The Snakes and Ladders, known originally as Moksha Patam, is an ancient Indian board game for two or
 more players regarded today as a worldwide classic. It is played on a game board with numbered,
  gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two 
  specific board squares. The object of the game is to navigate one's game piece, according to die rolls,
   from the start (bottom square) to the finish (top square), helped by climbing ladders but hindered by
    falling down snakes.<br/><br/>
The task fro this project is simple - run, and the game automatically will start playing for 2 players, and you can admire how the game will go.
<br/>Usually I played with my sister, both chose one of the pieces, and watched which of us will win (actually that was a way to resolve any dispute).
<br/><br/>The link to this project -&gt; <a href="#">github</a>  </p>

<div className="vid"><iframe width="100%" height="455"
src="https://www.youtube.com/embed/ZzQYpnVAsTc"Chess>
</iframe></div>
</div>
                  
                  <div className="imgg"><img alt="project" src="https://previews.123rf.com/images/brgfx/brgfx1911/brgfx191100526/133797773-boardgame-design-template-with-snakes-and-ladders-illustration.jpg"/></div>
                  
                  
              </div>

        </>
    )
}
