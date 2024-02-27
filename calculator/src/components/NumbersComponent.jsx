import React from "react";
import PropTypes from "prop-types";
import Button from "./ButtonComponent";

const items = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderNumbers = (onClickNumber) => {
	const renderButtons = (item) => (
		<Button
			key={item}
			buttonText={item.toString()}
			clickHandler={onClickNumber}
		/>
	);
	return items.map(renderButtons);
};

const Numbers = ({ onClickNumber }) => (
	<section className="numbers">{renderNumbers(onClickNumber)}</section>
);

Numbers.propTypes = {
	onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
