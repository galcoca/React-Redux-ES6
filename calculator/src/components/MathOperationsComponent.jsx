import React from "react";
import PropTypes from "prop-types";
import Button from "./ButtonComponent";

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="mathOperations">
        <Button buttonText="+" clickHandler={onClickOperation}/>
        <Button buttonText="-" clickHandler={onClickOperation}/>
        <Button buttonText="*" clickHandler={onClickOperation}/>
        <Button buttonText="/" clickHandler={onClickOperation}/>
        <Button buttonText="=" clickHandler={onClickEqual}/>
    </section>
)

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations