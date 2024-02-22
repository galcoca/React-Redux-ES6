import React, { useState } from "react";

import words from 'lodash.words'

import Result from "./components/ResultComponent";
import MathOperations from "./components/MathOperationsComponent";
import Numbers from "./components/NumbersComponent";
import Functions from "./components/FunctionsComponent";

const App = () => {
	const [number, setNumber] = useState('');

	const items = words(number, /[^-^+^*^/]+/g)

	const value = items.length > 0 ? items[items.length-1] : "0";

	const onClickButtonFunction = addNumber => {
		if(number === '0'){
			setNumber(addNumber)
		} else {
			setNumber(`${number}${addNumber}`)
		}
	}

	const onClickOperationFunction = operation => {
		setNumber(`${number}${operation}`)
	}

	const onClickEqualFunction = (equal) => {
		let calculatedResult = 0;
		let currentOperation = "+";
		let currentNumber = 0;
	  
		for (let i = 0; i < number.length; i++) {
		  const char = number[i];
	  
		  if (char >= "0" && char <= "9") {
			currentNumber = currentNumber * 10 + parseInt(char);
		  }
	  
		  if (char === "+" || char === "-" || char === "*" || char === "/") {
			if (currentOperation === "+") {
			  calculatedResult += currentNumber;
			} else if (currentOperation === "-") {
			  calculatedResult -= currentNumber;
			} else if (currentOperation === "*") {
			  calculatedResult *= currentNumber;
			} else if (currentOperation === "/") {
			  calculatedResult /= currentNumber;
			}
	  
			currentOperation = char;
			currentNumber = 0;
		  }
		}
	  
		if (currentOperation === "+") {
		  calculatedResult += currentNumber;
		} else if (currentOperation === "-") {
		  calculatedResult -= currentNumber;
		} else if (currentOperation === "*") {
		  calculatedResult *= currentNumber;
		} else if (currentOperation === "/") {
		  calculatedResult /= currentNumber;
		}
	  
		setNumber(calculatedResult.toString());
	  };

	const onDeleteFunction = Return => {
		if(number.length > 1){
			const newNumber = number.substring(0, number.length - 1);
			setNumber(newNumber);
		} else {
			setNumber('0');
		}
	}

	const onContentClearFunction = clr => (
		setNumber('0')
	)

	return (
		<div className="reactCalculator">
			<Result value={value}/>			
			<Numbers onClickNumber={onClickButtonFunction}/>
			<Functions onDelete={onDeleteFunction} onContentClear={onContentClearFunction}/>
			<MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction}/>
		</div>
	);
};

export default App;
