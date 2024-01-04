function generatePassword(length = 12, includeSpecialChars = true) {

  const passwordLengthInput = document.getElementById('passwordLengthInput').value;
  length = passwordLengthInput;

  let validChars = "";
  
  // chars
  const upperCaseCharsBtn = document.querySelector('#upperCaseChars');
  const lowerCaseCharsBtn = document.querySelector('#lowerCaseChars');
  const digitCharsBtn = document.querySelector('#digitChars');
  const specialCharsBTn = document.querySelector('#specialChars');

  if(upperCaseCharsBtn.checked){
    validChars += upperCaseCharsBtn.value;
  }
  
  if(lowerCaseCharsBtn.checked){
    validChars += lowerCaseCharsBtn.value;
  }
  
  if(digitCharsBtn.checked){
    validChars += digitCharsBtn.value;
  }
  
  if(specialCharsBTn.checked){
    validChars += specialCharsBTn.value;
  }
  
  console.log(validChars);

  let password = '';
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * validChars.length);
     password += validChars.charAt(randomIndex);
   }

  console.log(password);
  
  // displaying password
  const display = document.querySelector('#displayText');
  displayText.value = password;
  
  const copyBtn =document.getElementById('copyBtn');
  copyBtn.textContent ="copy";
  copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(password);
      copyBtn.textContent = "Copied";
    })

}

// generate button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generatePassword);  
