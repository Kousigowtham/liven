import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  customClasses = "",
  children = "clickMe",
  ComponentAs = "button",
  ...otherProps
}) => {
  return (
    <ComponentAs
      className={`${styles.button} ${customClasses}`}
      {...otherProps}
    >
      {children}
    </ComponentAs>
  );
};

Button.propTypes = {
  customClasses: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  ComponentAs: PropTypes.string,
};

export default Button;
