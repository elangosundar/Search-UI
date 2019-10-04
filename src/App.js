import React, { Component, Fragment } from 'react';
import Search from './components/Search';
import './App.css';

const navItem = ['glyphicon-search', 'glyphicon-filter', 'glyphicon-option-vertical']

class App extends Component {
  state = {
    search: false
  }
  render() {
    const { search } = this.state
    return (
      <div className="wrapper">
        <nav className="navWrapper navbar navbar-light" style={{ paddingLeft: search && '0px' }}>
          {search ?
            <Search search={true} /> :
            <Fragment><span>INBOX</span>
              <div className="iconWrapper">
                {navItem.map((icon, i) => <div class="nav-item menuItem" onClick={() => this.setState({ search: !i })}>
                  <i className={`glyphicon ${icon}`}></i>
                </div>)}
              </div>
            </Fragment>}
        </nav>
        <div className="contentWrapper"><Search /></div>
      </div >
    );
  }
}

export default App;