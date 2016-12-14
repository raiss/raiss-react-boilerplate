import styles from './ProgressBars.scss';
import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import { Bar, ButtonsController } from 'components';

export default class ProgressBars extends Component {
  static propTypes = {
    progressBars: PropTypes.object.isRequired,
  }

  state = {
    bars: {},
    selectedBar: 0,
  }

  componentDidMount() {
    const { bars } = this.props.progressBars;
    const barsObj = map(bars, (value, key) => ({ key, value }));

    this.setState({ bars: barsObj });
  }

  _barIncreaseReducer(currentState, { selectedBar, val }) {
    const newValue = currentState[selectedBar].value + val;
    return {
      ...currentState,
      ...{
        [selectedBar]: {
          key: selectedBar,
          value: newValue < 0 ? 0 : newValue,
        },
      },
    };
  }

  _onSelect(selectedBar) {
    this.setState({ selectedBar });
  }

  _onClick(val) {
    const { selectedBar, bars } = this.state;

    this.setState({
      bars: this._barIncreaseReducer(bars, { selectedBar, val }),
    });
  }

  render() {
    const { buttons, limit } = this.props.progressBars;
    const { bars, selectedBar } = this.state;
    return (
      <div>
        <h1 className={styles.header}>Select a bar to modify the value</h1>
        <ui>
          {map(bars, (bar) => (
            <Bar
              key={bar.key}
              index={bar.key}
              onSelect={::this._onSelect}
              value={bar.value}
              isSelected={bar.key === selectedBar}
              limit={limit}
            />
            ))}
        </ui>
        <ButtonsController onClick={::this._onClick} buttons={buttons} />
      </div>
    );
  }
}
