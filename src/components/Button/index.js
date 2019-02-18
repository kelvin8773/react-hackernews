import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  className: ""
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Loading = () => (
  <div>
    <h1>
      <FontAwesomeIcon icon="spinner" />
    </h1>
    {/* Loading ... */}
  </div>
);

const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component {...rest} />;

const ButtonWithLoading = withLoading(Button);

export default Button;
export { ButtonWithLoading };
