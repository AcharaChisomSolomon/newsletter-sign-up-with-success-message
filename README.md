# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/AcharaChisomSolomon/newsletter-sign-up-with-success-message)
- Live Site URL: [GitHub Pages](https://acharachisomsolomon.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

During this project, I learned about form validations and handling form data. Here's a snippet of the JavaScript code I used for email validation:

```javascript
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email) && email.length > 0;
};
```

### Continued development

In future projects, I want to focus on creating custom validation messages for specific errors during validation.

## Author

- Website - [Achara Chisom Solomon](https://acharachisomsolomon.github.io/my-portfolio/)
- Frontend Mentor - [@AcharaChisomSolomon](https://www.frontendmentor.io/profile/AcharaChisomSolomon)
- Twitter - [@Chisom14Solomon](https://twitter.com/Chisom14Solomon)

## Acknowledgments

I would like to thank Frontend Masters for their excellent learning resources.