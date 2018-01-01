import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Flex Grid</h1>
              <h2>Basic</h2>
            </div>
          </div>
        </div>
        <div className="container" styled="true">
          <SampleRow columns={range(0, 12).map(val => 'col-1')} />
          <SampleRow columns={range(0, 6).map(val => 'col-2')} />
          <SampleRow columns={range(0, 4).map(val => 'col-3')} />
          <SampleRow columns={range(0, 3).map(val => 'col-4')} />
          <SampleRow columns={[...range(0, 2).map(val => 'col-5'), 'col-2']} />
          <SampleRow columns={range(0, 2).map(val => 'col-6')} />
          {range(7, 12).map(val => <SampleRow columns={[`col-${val}`, `col-${(12 - val)}`]} key={val} />)}
          <SampleRow columns={['col-12']} />
          <SampleRow columns={['col-6', 'col-auto']} />
          <SampleRow columns={['col-auto', 'col-auto']} />
          <SampleRow columns={range(0, 3).map(val => 'col-lg-auto col-xs-12')} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Responsive</h2>
            </div>
          </div>
        </div>

        <div className="container" styled="true" responsive="true">
          <SampleRow columns={range(0, 4).map(val => 'col-xs-12 col-sm-6 col-md-4 col-lg-3')} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Alignment</h2>
            </div>
          </div>
        </div>

        <div className="container" alignment="true" styled="true">
          <SampleRow className="row--align-between" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-around" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-start" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-end" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-center" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-center row--valign-center" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-center row--valign-end" columns={range(0, 2).map(val => 'col-xs-3')} />
          <SampleRow className="row--align-center row--valign-stretch" columns={range(0, 2).map(val => 'col-xs-3')} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Offset</h2>
            </div>
          </div>
        </div>

        <div className="container" styled="true">
          <SampleRow columns={[...range(0, 10).map(val => 'col-1'), 'col-1 col-offset-1']} />
          <SampleRow columns={[...range(0, 4).map(val => 'col-2'), 'col-2 col-offset-2']} />
          <SampleRow columns={[...range(0, 2).map(val => 'col-3'), 'col-3 col-offset-3']} />
          <SampleRow columns={[...range(0, 1).map(val => 'col-4'), 'col-4 col-offset-4']} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Nested</h2>
            </div>
          </div>
        </div>

        <div className="container nested-example" styled="true" nested="true">
          <SampleRow className="row--align-between" columns={['col-xs-5', 'col-xs-5']}>
            <SampleRow columns={['col-xs-6', 'col-xs-6']} />
          </SampleRow>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Advanced</h2>
            </div>
          </div>
        </div>

        <div className="container" advanced="true">
          <Row m="row--valign-stretch">
            <Col c="7">
              <Row>
                <Col c="8">
                  <Row>
                    <Col c="8" m="box" />
                    <Col c="4" m="box" />
                  </Row>
                </Col>
                <Col c="4" m="box" />
              </Row>
              <Row c="4">
                <Col c="12" m="box"></Col>
              </Row>
              <Row>
                <Col c="7" m="box"/>
                <Col c="5" m="box"/>
              </Row>
            </Col>
            <Col c="5" m="box" />
          </Row>
        </div>
      </div>
    );
  }
}

function SampleRow(props) {
  const {columns, children, className} = props;

  return (
    <div className={`row ${className || ''}`}>
      {
        columns.map( (val, i) => <div key={i} className={val}>{children}</div>)
      }
    </div>
  );
}

function Row(props) {
  const {children, m} = props;

  return (
    <div className={`row ${m || ''}`}>
      {children}
    </div>
  );
}

function Col(props) {
  const {children, c, m} = props;

  return (
    <div className={`col-${c} ${m || ''}`}>
      {children}
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));
