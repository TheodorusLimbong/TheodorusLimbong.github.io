var conversionMethod = 'celsiusToFahrenheit';

function changeConversionMethod() {
  var inputCelsius = document.getElementById('inputCelsius').value;
  var conversionMethodElement = document.getElementById('conversionMethod');
  var convertButton = document.getElementById('convertButton');

  if (inputCelsius !== '') {
    conversionMethod = 'celsiusToFahrenheit';
    conversionMethodElement.textContent = 'Celsius (°C) to Fahrenheit (°F)';
    convertButton.textContent = 'Conversion to Fahrenheit';
  } else {
    conversionMethod = 'fahrenheitToCelsius';
    conversionMethodElement.textContent = 'Fahrenheit (°F) to Celsius (°C)';
    convertButton.textContent = 'Conversion to Celsius';
  }
  
  updateConversionExplanation(inputCelsius);
}

function convertToCelsius() {
  var inputCelsius = document.getElementById('inputCelsius').value;
  var outputFahrenheit = document.getElementById('outputFahrenheit');
  
  if (conversionMethod === 'celsiusToFahrenheit') {
    var result = (inputCelsius * 9/5) + 32;
    outputFahrenheit.textContent = result.toFixed(2);
  } else {
    var result = (parseFloat(inputCelsius) - 32) * 5/9;
    outputFahrenheit.textContent = result.toFixed(2);
  }
  
  updateConversionExplanation(inputCelsius);
}

function reset() {
  document.getElementById('inputCelsius').value = '';
  document.getElementById('outputFahrenheit').textContent = '';
  document.getElementById('conversionMethod').textContent = '';
  document.getElementById('conversionExplanation').textContent = '';
  var convertButton = document.getElementById('convertButton');
  convertButton.textContent = 'Conversion to Fahrenheit';
}

function reverseConversion() {
  var conversionMethodElement = document.getElementById('conversionMethod');
  var convertButton = document.getElementById('convertButton');
  var inputCelsiusLabel = document.querySelector('label[for="inputCelsius"]');
  var outputFahrenheitLabel = document.querySelector('label[for="outputFahrenheit"]');
  
  if (conversionMethod === 'celsiusToFahrenheit') {
    conversionMethod = 'fahrenheitToCelsius';
    inputCelsiusLabel.textContent = 'Fahrenheit:';
    outputFahrenheitLabel.textContent = 'Celsius:';
    conversionMethodElement.textContent = 'Fahrenheit (°F) to Celsius (°C)';
    convertButton.textContent = 'Conversion to Celsius';
  } else {
    conversionMethod = 'celsiusToFahrenheit';
    inputCelsiusLabel.textContent = 'Celsius:';
    outputFahrenheitLabel.textContent = 'Fahrenheit:';
    conversionMethodElement.textContent = 'Celsius (°C) to Fahrenheit (°F)';
    convertButton.textContent = 'Conversion to Fahrenheit';
  }
}

function updateConversionExplanation(inputCelsius) {
  var conversionExplanation = document.getElementById('conversionExplanation');
  
  if (conversionMethod === 'celsiusToFahrenheit') {
    conversionExplanation.textContent = '(' + inputCelsius + ' × 9/5) + 32';
  } else {
    conversionExplanation.textContent = '(' + inputCelsius + ' - 32) × 5/9';
  }
}

function changeConversionMethod() {
  var inputCelsius = document.getElementById('inputCelsius').value;
  var conversionMethodElement = document.getElementById('conversionMethod');
  var convertButton = document.getElementById('convertButton');

  if (inputCelsius !== '') {
    conversionMethod = 'celsiusToFahrenheit';
    conversionMethodElement.textContent = 'Celsius (°C) to Fahrenheit (°F)';
    convertButton.textContent = 'Conversion to Fahrenheit';
  } else {
    conversionMethod = 'celsiusToFahrenheit';
    conversionMethodElement.textContent = 'Celsius (°C) to Fahrenheit (°F)';
    convertButton.textContent = 'Conversion to Fahrenheit';
  }

  updateConversionExplanation(inputCelsius);
}
