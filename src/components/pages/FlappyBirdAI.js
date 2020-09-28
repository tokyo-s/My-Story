import React from 'react';
import './theproject.css';
//import Projects from '../Projects'

export default function TheProject() {
    return (
        <>
              <h1>Flappy Bird AI</h1>
              <div className="content">
                  <div className="text"><p>
I guess this is my first AI project where I used deep neural networks to train the bird 
to get a maximum score or even fly forever<br/>
This project is also made with the help of one of my favorite programming youtubers <a href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" target="_blank">Tech with Tim</a><br/><br/>
The algorithm is very simple,
it uses the distances to the upper pipe and to the lower pipe, and tests what 
the optimal distance will be to live longer 
if bird survives a pipe it gets a point and so on
the bird with the best score is the base for the next generation
this happens while the bird is not a proffesional.
usually birds is already ideal under 5 generation of 10 birds.
It's really exciting for me and I think this is the reason why I'm so passionate in Artificial Intelligence..
<br/><br/>The link to this project -&gt; <a href="#">github</a>  </p>

<div className="vid"><iframe width="100%" height="455"
src="https://www.youtube.com/embed/ZzQYpnVAsTc"Chess>
</iframe></div>
</div>
                  
                  <div className="imgg"><img alt="project" src="https://www.dotgears.com/apps/ss_flappybird_00.png"/></div>
                  
                  
              </div>

        </>
    )
}
