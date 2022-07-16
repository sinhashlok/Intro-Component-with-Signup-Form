# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot
![alt text](https://github.com/sinhashlok/Intro-Component-with-Signup-Form/blob/main/Image.png)

### Links
- Live Site URL: https://sinhashlok.github.io/Intro-Component-with-Signup-Form/

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned
- I learned how to check validity in form
```
if(!email.validity.valid || !fnameError.validity.valid || !lnameError.validity.valid || pwdError.validity.valid) {
  showError();
  event.preventDefault();
}
```

- I learned how to change color of placeholder from Js
```
const style = document.createElement("style")
  style.type = "text/css";
  const {
    sheet
  } = document.head.appendChild(style)
        
  const rule = sheet.insertRule("::placeholder {}")
  const placeholderStyle = sheet.rules[rule].style;
  placeholderStyle.color = "hsl(0, 100%, 74%)";
```
