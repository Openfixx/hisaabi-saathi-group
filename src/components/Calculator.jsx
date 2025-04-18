
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentOperation, setCurrentOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);
  const [transactionDesc, setTransactionDesc] = useState('');
  
  const handleNumberClick = (num) => {
    if (display === '0' || resetDisplay) {
      setDisplay(num.toString());
      setResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };
  
  const handleOperationClick = (operation) => {
    setPreviousValue(parseFloat(display));
    setCurrentOperation(operation);
    setResetDisplay(true);
  };
  
  const handleCalculate = () => {
    if (previousValue === null || currentOperation === null) return;
    
    let result;
    const current = parseFloat(display);
    
    switch (currentOperation) {
      case '+':
        result = previousValue + current;
        break;
      case '-':
        result = previousValue - current;
        break;
      case '*':
        result = previousValue * current;
        break;
      case '/':
        result = previousValue / current;
        break;
      default:
        return;
    }
    
    setDisplay(result.toString());
    setCurrentOperation(null);
    setPreviousValue(null);
  };
  
  const handleClear = () => {
    setDisplay('0');
    setCurrentOperation(null);
    setPreviousValue(null);
    setResetDisplay(false);
  };
  
  const handleDecimal = () => {
    if (resetDisplay) {
      setDisplay('0.');
      setResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };
  
  const handleSaveTransaction = () => {
    // This would save to Supabase in a real implementation
    alert(`Transaction saved: ${transactionDesc} - Amount: ₹${display}`);
    
    // Reset
    handleClear();
    setTransactionDesc('');
  };
  
  return (
    <div className="calculator-container">
      <div className="transaction-input">
        <input
          type="text"
          value={transactionDesc}
          onChange={(e) => setTransactionDesc(e.target.value)}
          placeholder="Transaction description, e.g. 'Dinner with Aarav'"
          className="transaction-description"
        />
      </div>
      
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        
        <div className="calculator-buttons">
          <button onClick={handleClear} className="btn-clear">C</button>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperationClick('/')} className="btn-operation">÷</button>
          
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperationClick('*')} className="btn-operation">×</button>
          
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperationClick('-')} className="btn-operation">−</button>
          
          <button onClick={() => handleNumberClick(0)} className="btn-zero">0</button>
          <button onClick={handleDecimal}>.</button>
          <button onClick={() => handleOperationClick('+')} className="btn-operation">+</button>
          
          <button onClick={handleCalculate} className="btn-equals">=</button>
        </div>
      </div>
      
      <div className="transaction-actions">
        <button 
          onClick={handleSaveTransaction} 
          disabled={!transactionDesc || display === '0'}
          className="btn-save-transaction"
        >
          Save Transaction
        </button>
      </div>
    </div>
  );
};

export default Calculator;
