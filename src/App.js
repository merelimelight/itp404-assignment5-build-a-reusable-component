import React from 'react';
import './App.css';
import DropAnimation from './DropAnimation'
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

export default class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      showDiv: true,
      divTitle: 'Animated Div'
    };
  }

  onClick = e => {
    e.preventDefault();
    this.setState({
      showDiv: false,
      divTitle: 'Hidden Div'
    });
  }

  render ()
  {
    return (
      <div>

        <header>
          <h1> Drop Animation Reusable Component </h1>
        </header>
          <DropAnimation 
          divTitle={this.state.divTitle} 
          showDiv={this.state.showDiv}
          onClick={this.onClick}
          >

              <p> When you click on this div, it will drop out. </p>

          </DropAnimation>

        <p> Developers could use this reusable component to animate many divs on their pages quickly, consistently, and easily. </p>
        <p> I want to make clean animations as easy to implement as possible. </p>
        <p> I named the component DropAnimation because it animates the div "dropping" out. 
            I named the first prop showDiv because if it's false, the div isn't shown, and if true, it is.  
            I named the second divTitle because that prop changes the title line of the div.</p>
        
      </div>

      // <AnimatedIf>

      // </AnimatedIf>
    );
  }
}
