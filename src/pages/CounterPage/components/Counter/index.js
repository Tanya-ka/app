import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  parityType,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: countValue % 2 === 0 ? "pink" : "violet" }}
    >
      <div className={styles.display}>{countValue}</div>

      <div className={styles.displayEvenOdd}>{parityType}</div>

      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButtonCenter} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  parityType: PropTypes.string,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Counter;
