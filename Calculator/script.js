function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
  }
  
  function deleteLast() {
    let display = document.querySelector('input[name="display"]');
    if (display.value.length > 0) {
      display.value = display.value.slice(0, -1);
    }
  }
  
  function appendDecimal() {
    let display = document.querySelector('input[name="display"]');
    if (!display.value.includes('.')) {
      display.value += '.';
    }
  }
  
  function appendToDisplay(value) {
    let display = document.querySelector('input[name="display"]');
    display.value += value;
  }
  
  function calculateResult() {
    let display = document.querySelector('input[name="display"]');
    try {
      display.value = eval(display.value);
      if (!isFinite(display.value)) {
        throw new Error('Result is not a finite number');
      }
    } catch (error) {
      display.value = 'Error';
      console.error(error);
    }
  }
  