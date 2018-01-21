import React, { Component } from 'react';
import './Header.styl';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Header'>
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box">
              START
            </div>
          </div>
          <div className="col-xs-6">
            <div className="box">
              end
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
