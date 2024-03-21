const input = document.getElementById("input");
const output = document.getElementById("output");
const inputLabel = document.getElementById("inputLabel");
const outputLabel = document.getElementById("outputLabel");
const swap = document.getElementById("swap");

// transform dictionary
const dictionaryEng = Object.fromEntries(
  Object.entries(dictionary).map(
    ([key, val]) => [key.toLowerCase(), val[0]]
  )
);

// https://stackoverflow.com/a/37511463
const dictionaryYeat = Object.fromEntries(
  Object.entries(dictionary).flatMap(([key, arrayVal]) =>
    arrayVal.map(val => [val.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""), key])
  )
);

let currentDictionary = dictionaryYeat;
let reg = setReg(currentDictionary);

// https://stackoverflow.com/a/15604206
function setReg(mapObj) {
  return new RegExp(Object.keys(mapObj).map(key => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).sort().reverse().join("|"),"gi");
}

function replaceAll() {
  const inputLabelHTML = inputLabel.innerHTML;
  let inputValue = input.value;

  inputValue = inputLabelHTML == "English" ? inputValue : inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  output.value = inputValue.replace(reg, function(matched){
    const translation = currentDictionary[matched.toLowerCase()];
    return initialIsCapital(matched) ? capitalizeFirstLetter(translation) : translation;
  });
}

// https://stackoverflow.com/a/39292247
function initialIsCapital(word){
  return word[0] !== word[0].toLowerCase();
}

// https://stackoverflow.com/a/1026087
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

input.addEventListener("input", replaceAll);

swap.addEventListener("click", function () {
  const inputLabelHTML = inputLabel.innerHTML;

  currentDictionary = inputLabelHTML == "English" ? dictionaryYeat : dictionaryEng;
  reg = setReg(currentDictionary);

  inputLabel.innerHTML = outputLabel.innerHTML;
  outputLabel.innerHTML = inputLabelHTML;

  input.value = output.value;

  replaceAll();
});