import React from 'react';
import logo from './snoew.png';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { live: props.live };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let names = '';
    if (Array.isArray(this.state.live)) {
      names = this.state.live.join(', ');
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Live Now:
            <em id="names">{names}</em>
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
