import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
	constructor() {
		super();
		this.calcResult = ""
		this.calcPre = ""
		this.result = false
	}
  
/******************************************************************************
 btnPress - press buttons on calculator
******************************************************************************/
	btnPress(btn) {
		const signs = ["c", "d", "e"];
		let ifSign = signs.indexOf(btn)
		
		if (ifSign > -1) {
			switch(ifSign) {
				case 0:
					this.btnClear()
					return
				case 1:
					if (!this.result) this.btnClearLast()
					return
				case 2:
					this.btnEval()
					return
				default:
					return
			}
		} else {
			this.calcResult += btn;
			this.writeScreen(this.calcResult, 'calc-result')
		}
	}
	
/******************************************************************************
btnClear - clear content
******************************************************************************/
	btnClear() {
		this.calcResult = ""
		this.calcPre = ""
		this.writeScreen(this.calcResult, 'calc-result')
		this.writeScreen(this.calcPre, 'calc-pre')		
	}
	
/******************************************************************************
btnClearLast - clear last char
******************************************************************************/
	btnClearLast() {
		this.calcResult = this.calcResult.slice(0, -1);
		this.writeScreen(this.calcResult, 'calc-result')	
	}
	
/******************************************************************************
btnEval - calculate result
******************************************************************************/
	btnEval() {
		let result
		
		try {
			result = eval(this.calcResult); 
		} catch (e) {
			if (e instanceof SyntaxError) {}
		}

		if(typeof result == 'number' && result != 'infinity'){
			this.calcPre = this.calcResult
			this.calcResult = result
			this.writeScreen(this.calcPre, 'calc-pre')
			this.writeScreen(result, 'calc-result')
		} else {
			this.writeScreen('ERROR', 'calc-result')
		}
	}
	
/******************************************************************************
writeScreen - write on screen
******************************************************************************/
	writeScreen(value, where) {
		ReactDOM.render(value, document.getElementById(where))
	}
	
/******************************************************************************
render
******************************************************************************/
	render() {
		return (
			<div id="calc-main">
				<div id="calc-screen">
					<div id="calc-pre-wrap">
						<span id="calc-pre"></span>
					</div>
					<div id="calc-result-wrap">
						<span id="calc-result"></span>
					</div>
				</div>
				<div id="calc-buttons">
					<div className="btn-sign" onClick={() => this.btnPress('c')}>C</div>
					<div className="btn-sign" onClick={() => this.btnPress('(')}>(</div>
					<div className="btn-sign" onClick={() => this.btnPress(')')}>)</div>
					<div className="btn-sign" onClick={() => this.btnPress('/')}>÷</div>
					<div className="btn-number" onClick={() => this.btnPress('7')}>7</div>
					<div className="btn-number" onClick={() => this.btnPress('8')}>8</div>
					<div className="btn-number" onClick={() => this.btnPress('9')}>9</div>
					<div className="btn-sign" onClick={() => this.btnPress('*')}>x</div>
					<div className="btn-number" onClick={() => this.btnPress('4')}>4</div>
					<div className="btn-number" onClick={() => this.btnPress('5')}>5</div>
					<div className="btn-number" onClick={() => this.btnPress('6')}>6</div>
					<div className="btn-sign" onClick={() => this.btnPress('-')}>-</div>
					<div className="btn-number" onClick={() => this.btnPress('3')}>3</div>
					<div className="btn-number" onClick={() => this.btnPress('2')}>2</div>
					<div className="btn-number" onClick={() => this.btnPress('1')}>1</div>
					<div className="btn-sign" onClick={() => this.btnPress('+')}>+</div>
					<div className="btn-sign" onClick={() => this.btnPress('d')}>&#9003;</div>
					<div className="btn-number" onClick={() => this.btnPress('0')}>0</div>
					<div className="btn-sign" onClick={() => this.btnPress('.')}>.</div>
					<div className="btn-sign equal" onClick={() => this.btnPress('e')}>=</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Calculator />, document.getElementById('calculator'));
