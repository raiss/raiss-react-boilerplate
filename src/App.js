import styles from './app.scss';
import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import { ProgressBars } from 'containers';

export default class App extends Component {
  state = {
    progressBarsData: {},
  };

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    const progressBarsData = {
      buttons: [15, 22, -13, -21],
      bars: [78, 64],
      limit: 110,
    };

    this.setState({ progressBarsData });
  }

  render() {
    const { progressBarsData } = this.state;

    return (<div className={styles.container}>
      {!isEmpty(progressBarsData) ?
        <ProgressBars progressBars={progressBarsData} />
      : null}
    </div>);
  }
}
