import Result from "./components/ResultComponent";
import MathOperations from "./components/MathOperationsComponent";
import Numbers from "./components/NumbersComponent";
import Functions from "./components/FunctionsComponent";

const App = () => {
	const onClickButtonFunction = text => (
		console.log('Button.Clickhandler', text)
	)

	const onClickOperationFunction = operation => (
		console.log('Operation', operation)
	)

	const onClickEqualFunction = equal => (
		console.log('Equal', equal)
	)

	const onDeleteFunction = Return => (
		console.log('Return', Return)
	)

	const onContentClearFunction = clr => (
		console.log('Clear', clr)
	)

	return (
		<div className="reactCalculator">
			<Result value={"0"}/>			
			<Numbers onClickNumber={onClickButtonFunction}/>
			<Functions onDelete={onDeleteFunction} onContentClear={onContentClearFunction}/>
			<MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction}/>
		</div>
	);
};

export default App;
