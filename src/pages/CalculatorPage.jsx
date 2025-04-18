
import React from 'react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => {
  return (
    <div className="calculator-page">
      <Header />
      
      <div className="calculator-page-header">
        <h1>Calculator</h1>
        <p>Calculate expenses and add them to transactions</p>
      </div>
      
      <div className="calculator-page-content">
        <div className="calculator-info">
          <div className="info-card">
            <h2>Quick Tips</h2>
            <ul>
              <li>Add a description to record who you lent to or borrowed from</li>
              <li>Use this calculator to split bills easily</li>
              <li>Save transactions to update your balance</li>
              <li>Saved transactions appear in your history</li>
            </ul>
          </div>
          
          <div className="actions-card">
            <h2>Quick Actions</h2>
            <div className="preset-buttons">
              <button className="preset-btn">Split bill among 3</button>
              <button className="preset-btn">Share equally</button>
              <button className="preset-btn">Add 5% tax</button>
              <button className="preset-btn">Add 10% tip</button>
            </div>
          </div>
        </div>
        
        <div className="main-calculator">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
