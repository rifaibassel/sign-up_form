const passInputField = document.getElementById('pass');
const confirmPassInputField = document.getElementById('confirm_pass');

console.log(passInputField);
console.log(confirmPassInputField);

confirmPassInputField.addEventListener('blur', passCheckHandler);

function passCheckHandler(e) {
  e.preventDefault();
  if (passInputField.value !== confirmPassInputField.value) {
    passInputField.classList.add('error');
    confirmPassInputField.classList.add('error');
  } else {
    passInputField.classList.remove('error');
    confirmPassInputField.classList.remove('error');
  }
}
