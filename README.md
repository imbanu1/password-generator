# password-generator
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
![image]https://user-images.githubusercontent.com/60904607/284387210-6c70d226-2df4-48f7-a0f3-b0323ee4438b)
![image]https://user-images.githubusercontent.com/60904607/284387326-4232097a-0f38-40bf-bc3d-89e8c11d0063)
![image]https://user-images.githubusercontent.com/60904607/284387615-98a2e10a-461a-4dc4-89c1-8561e945f41d)
![image]https://user-images.githubusercontent.com/60904607/284387976-9bbcc67f-f9da-4a2a-b856-591e87b763ad)
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
![image]https://user-images.githubusercontent.com/60904607/284386811-c64495cb-8850-48f3-b5e8-bde2e2a271d0)
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
![image]https://user-images.githubusercontent.com/60904607/284387210-6c70d226-2df4-48f7-a0f3-b0323ee4438b)
![image]https://user-images.githubusercontent.com/60904607/284387326-4232097a-0f38-40bf-bc3d-89e8c11d0063)
![image]https://user-images.githubusercontent.com/60904607/284387615-98a2e10a-461a-4dc4-89c1-8561e945f41d)
![image]https://user-images.githubusercontent.com/60904607/284387976-9bbcc67f-f9da-4a2a-b856-591e87b763ad)
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
![image]https://user-images.githubusercontent.com/60904607/284388712-7baf9cab-2847-4be8-8ab7-ea410e0306c7)
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
![image]https://user-images.githubusercontent.com/60904607/284388712-7baf9cab-2847-4be8-8ab7-ea410e0306c7)
