import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li><Link  to="/">Home</Link ></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/transaction">Transaction</Link></li>
        </ul>
      </div>
    )
  }
}

module.exports = Nav;
