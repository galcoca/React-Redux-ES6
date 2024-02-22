import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, buttonType, clickHandler }) => (
        <button className={buttonType} onClick={() => clickHandler(buttonText)}>
            {buttonText}
        </button>
)

Button.propTypes = {
    buttonType: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;