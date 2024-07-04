import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.css";

const Switch = ({ label }) => {
  const [value, setValue] = useState(false);

  const clickHandler = () => {
    setValue((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <label>{label}</label>
      <div className={styles.switchContainer} data-checked={value}>
        <div className={styles.ball} />
        <input type="checkbox" checked={value} onChange={clickHandler} />
      </div>
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
};

export default Switch;
