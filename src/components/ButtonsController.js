import styles from './ButtonsController.scss';
import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';

export default class ButtonsController extends Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  _onClick(val) {
    this.props.onClick(val);
  }

  _renderButton(buttonValue, key) {
    const style = {
      color: buttonValue < 0 ? 'red' : 'darkgreen',
    };

    return (
      <button
        key={key}
        className={styles.button}
        style={style}
        onClick={() => this._onClick(buttonValue)}
      >
        {buttonValue > 0 ? '+' : ''}{buttonValue}
      </button>
    );
  }

  render() {
    const { buttons } = this.props;

    return (
      <div className={styles.container}>
        {map(buttons, ::this._renderButton)}
      </div>
    );
  }
}
