import React from 'react';

class Main extends React.Component{
  render(){
    return (
      <div>
        <h1>This is Main Page</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
