# password-generator
https://imbanu1.github.io/password-generator/
https://github.com/imbanu1/password-generator

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or 
special characters
![lowerc](https://github.com/imbanu1/password-generator/blob/main/assets/images/lowercase.png?raw=true)
![upperc][(https://github.com/imbanu1/password-generator/blob/main/assets/images/uppercase.png?raw=true)]
![num](https://github.com/imbanu1/password-generator/blob/main/assets/images/numbers.png?raw=true)
![spec](https://github.com/imbanu1/password-generator/blob/main/assets/images/spechar.png?raw=true)
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
![genl](https://github.com/imbanu1/password-generator/blob/main/assets/images/generator-length.png?raw=true)
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
![lowerc](https://github.com/imbanu1/password-generator/blob/main/assets/images/lowercase.png?raw=true)
![upperc](https://github.com/imbanu1/password-generator/blob/main/assets/images/uppercase.png?raw=true)
![num](https://github.com/imbanu1/password-generator/blob/main/assets/images/numbers.png?raw=true)
![spec](https://github.com/imbanu1/password-generator/blob/main/assets/images/spechar.png?raw=true)
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
![valid](https://github.com/imbanu1/password-generator/blob/main/assets/images/validate.png?raw=true)
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
![valid](https://github.com/imbanu1/password-generator/blob/main/assets/images/validate.png?raw=true)
