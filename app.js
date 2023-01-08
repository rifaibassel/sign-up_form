const passInputField = document.getElementById('pass');
const confirmPassInputField = document.getElementById('confirm_pass');
// const passwordErrorTextDiv = document.createElement('div');
const passwordErrorText = document.createElement('p');
passwordErrorText.textContent = '* Passwords do not match';
passwordErrorText.classList.add('error-text');

console.log(passInputField);
console.log(confirmPassInputField);

confirmPassInputField.addEventListener('blur', passCheckHandler);

function passCheckHandler(e) {
  e.preventDefault();
  if (passInputField.value !== confirmPassInputField.value) {
    passInputField.classList.add('error');
    confirmPassInputField.classList.add('error');
    passInputField.parentElement.appendChild(passwordErrorText);
  } else {
    passInputField.classList.remove('error');
    confirmPassInputField.classList.remove('error');
    passInputField.parentElement.removeChild(passwordErrorText);
  }
}
