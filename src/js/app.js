import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {range(0, 12).map(val => <div key={val} className="col-xs-1"></div>)}
        </div>

        <div className="row">
          {range(0, 6).map(val => <div key={val} className="col-xs-2"></div>)}
        </div>

        <div className="row">
          {range(0, 4).map(val => <div key={val} className="col-xs-3"></div>)}
        </div>

        <div className="row">
          {range(0, 3).map(val => <div key={val} className="col-xs-4"></div>)}
        </div>

        <div className="row">
          {range(0, 2).map(val => <div key={val} className="col-xs-5"></div>)}
          <div className="col-xs-2"></div>
        </div>

        <div className="row">
          {range(0, 2).map(val => <div key={val} className="col-xs-6"></div>)}
        </div>

        {range(7, 12).map(val => (
          <div className="row" key={val}>
            <div className={`col-xs-${val}`}></div>
            <div className={`col-xs-${(12 - val)}`}></div>
          </div>
        ))}

        <div className="row">
          <div className="col-xs-12"></div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
