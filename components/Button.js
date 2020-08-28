import React, {Component} from 'react';

class Button extends Component { //Always extend react component class
    render(){
        return ( //Return HTML, <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript
            <div>
                <button class="calc-button">1</button> 
            </div>
        ) //Need props so each time we instantiate button, it knows what it is and knows what to do
    }
}

export default Button; //Use App.js to create grid of buttons