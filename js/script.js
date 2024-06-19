const suhuCelsiusInput = document.getElementById("SuhuCelsius");
const suhuFahrenheitInput = document.getElementById("SuhuFahrenheit");
const konversiButton = document.getElementById("konversiButton");
const reverseButton = document.getElementById("reverseButton");
const resetButton = document.getElementById("resetButton");
const caraKalkulasiTextarea = document.getElementById("caraKalkulasi");

// konversi celcius ke fahrenheit
function convertCelsiusToFahrenheit() {
  const celsius = parseFloat(suhuCelsiusInput.value);
  if (isNaN(celsius)) {
    alert("Masukkan suhu Celsius yang valid.");
    return;
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  suhuFahrenheitInput.value = fahrenheit.toFixed(2);
  caraKalkulasiTextarea.value = `S(°F) = (${celsius} °C x 9/5) + 32 = ${fahrenheit.toFixed(
    2
  )} °F`;
}

// konversi fahrenheit ke celcius
function convertFahrenheitToCelsius() {
  const fahrenheit = parseFloat(suhuFahrenheitInput.value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan suhu Fahrenheit yang valid.");
    return;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  suhuCelsiusInput.value = celsius.toFixed(2);
  caraKalkulasiTextarea.value = `S(°C) = (${fahrenheit} °F - 32) x 5/9 = ${celsius.toFixed(
    2
  )} °C`;
}

// fungsi untuk reset inputan
function resetInputs() {
  suhuCelsiusInput.value = "";
  suhuFahrenheitInput.value = "";
  caraKalkulasiTextarea.value = "";
}

// menentukan konversi mana yang harus dipanggil
function handleConversion() {
  if (suhuCelsiusInput.value) {
    convertCelsiusToFahrenheit();
  } else if (suhuFahrenheitInput.value) {
    convertFahrenheitToCelsius();
  } else {
    alert("Masukkan suhu yang valid.");
  }
}

// eventlistener ketika button konversi di klik
konversiButton.addEventListener("click", handleConversion);
let isCelsiusToFahrenheit = true;

// eventlistener ketika button reverse di klik
reverseButton.addEventListener("click", () => {
  if ((isCelsiusToFahrenheit = !isCelsiusToFahrenheit)) {
    convertCelsiusToFahrenheit();
  } else {
    convertFahrenheitToCelsius();
  }
});

// eventlistener ketika button reset di klik
resetButton.addEventListener("click", resetInputs);
