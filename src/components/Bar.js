import styles from './Bar.scss';
import React, { Component, PropTypes } from 'react';

export default class Bar extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
  }

  _calculatePercentage(value, limit) {
    return (value * 100) / limit;
  }

  _getBarColor(isSelected, percentage) {
    // [enable color, disable color]
    const colors = isSelected ? ['#bce02b', '#ff4940'] : ['#8e9a5c', '#bd6c6c'];

    return percentage < 100 ? colors[0] : colors[1];
  }

  render() {
    const { value, isSelected, limit, index, onSelect } = this.props;
    const percentage = Math.round(this._calculatePercentage(value, limit));

    const barStyle = {
      width: percentage > 100 ? '100%' : `${percentage}%`,
      background: this._getBarColor(isSelected, percentage),
    };

    return (
      <li className={`${styles.container} ${isSelected ? styles.selected : ''}`} onClick={() => { onSelect(index); }}>
        <div className={styles.bar} style={barStyle} />
        <div className={styles.percentage}>{percentage}%</div>
      </li>
    );
  }
}
