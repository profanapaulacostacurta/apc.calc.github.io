const calculator = {
        displayValue: &#39;0&#39;,
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
};
      
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
      
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === &#39;0&#39; ? digit : displayValue &#43; digit;
  }
}
      
function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue &#43;= dot;
  }
 }
      
 function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
      
    if (operator &amp;&amp; calculator.waitingForSecondOperand)  {
          calculator.operator = nextOperator;
          return;
    }
      
    if (firstOperand == null) {
       calculator.firstOperand = inputValue;
    } else if (operator) {
       const currentValue = firstOperand || 0;
       const result = performCalculation[operator](currentValue, inputValue);
      
       calculator.displayValue = String(result);
       calculator.firstOperand = result;
    }
      
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
      
  const performCalculation = {
        &#39;/&#39;: (firstOperand, secondOperand) =&gt; firstOperand / secondOperand,
      
        &#39;*&#39;: (firstOperand, secondOperand) =&gt; firstOperand * secondOperand,
      
        &#39;&#43;&#39;: (firstOperand, secondOperand) =&gt; firstOperand &#43; secondOperand,
      
        &#39;-&#39;: (firstOperand, secondOperand) =&gt; firstOperand - secondOperand,
      
        &#39;=&#39;: (firstOperand, secondOperand) =&gt; secondOperand
      };
      
  function resetCalculator() {
        calculator.displayValue = &#39;0&#39;;
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
  }
      
  function updateDisplay() {
        const display = document.querySelector(&#39;.calculator-screen&#39;);
        display.value = calculator.displayValue;
  }

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
