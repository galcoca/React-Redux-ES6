import React from "react";
import PropTypes from "prop-types";
import Button from "./ButtonComponent";

const Functions = ({onDelete, onContentClear}) => (
    <section className="functions">
        <Button buttonText="clear" buttonType="btnLongText" clickHandler={onContentClear}/>
        <Button buttonText="&larr;" clickHandler={onDelete}/>
    </section>
)

Functions.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onContentClear: PropTypes.func.isRequired
}

export default Functions