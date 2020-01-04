import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  buy () {
    console.log(12345);
  }
  render() {
    return (
      <div>
        <h3>Header</h3>
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;