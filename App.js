import React, {Component} from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props){
    super(props);//Must always instantiate the Parent Class
 
 
    this.state = {
      current: '0',
      previous: []
    }
  }

  reset = () => {//Method 1 = Clear button for calculator
    this.setState({result: '0'});
  }

  addToCurrent = (symbol) => {//Method 2 = Division
    this.setState({current: this.state.current + symbol});
  }

// The <input> section is the part of the where we are creating input field for calculator
  render() {//Will create buttons below in Array
    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset},//^render methods in descending order
      {symbol: '/', cols: 1, action: this.addToCurrent},//Most buttons here will use this function, can copy and paste
      {symbol: '7', cols: 1, action: this.addToCurrent},
      {symbol: '8', cols: 1, action: this.addToCurrent},
      {symbol: '9', cols: 1, action: this.addToCurrent},
      {symbol: 'X', cols: 1, action: this.addToCurrent},
      {symbol: '4', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '6', cols: 1, action: this.addToCurrent},
      {symbol: '-', cols: 1, action: this.addToCurrent},
      {symbol: '1', cols: 1, action: this.addToCurrent},
      {symbol: '2', cols: 1, action: this.addToCurrent},
      {symbol: '3', cols: 1, action: this.addToCurrent},
      {symbol: '+', cols: 1, action: this.addToCurrent},
      {symbol: '0', cols: 2, action: this.addToCurrent},
      {symbol: '.', cols: 1, action: this.addToCurrent},
      {symbol: '=', cols: 1, action: this.addToCurrent},
    ];
  return (//When using a function in JavaScript, need curly braces {}. Mapping through an array, need to declare variable 'buttons'. With ES6, don't need to state function in parameters, already there when adding brackets ():
    <div className="App">
       <input classmate="result" type="text" value={this.state.current} /> 

      {buttons.map((btn, i) => {
        return <Button symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action}/>      })}
    
    </div>
    );
  }
}

export default App;
