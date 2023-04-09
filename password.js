const generatePassword = require('generate-password');

// Function to generate random password
function generateRandomPassword() {
  // Set password options
  const passwordOptions = {
    length: 10, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters
    excludeSimilarCharacters: true, // Exclude similar characters like 'i' and 'l'
    strict: true // Exclude ambiguous characters like '{', '}', '(', ')', etc.
  };

  // Generate the password
  const password = generatePassword.generate(passwordOptions);

  // Return the generated password
  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log(`Random Password: ${randomPassword}`);