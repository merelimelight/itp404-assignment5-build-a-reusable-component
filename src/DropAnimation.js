import React from 'react';

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    
      
    render ()
    {
        return (
            <div
            onClick = {this.props.onClick} id = "animation">
                <h3> {this.props.divTitle} </h3>
                <div id="text" style = {{display: this.props.showDiv ? "block" : "none"}}>
                {this.props.children}
                </div>
            </div>
        );
    }
}