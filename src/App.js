import React from 'react';
import logo from './snoew.png';
import './App.css';

class Header extends React.Component { 
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { live: props.live };
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Live Now: <em id="names">{this.state.live}</em></p>
      </header>
    </div>
  );
  }
}

export default Header;
