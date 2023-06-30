# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

To check the passwords strength I decided to check what password length and options the user added. By using Regex and regex.test, the function will check IF the password string contains certain characters from the options. To determine the strength value I created a strength count variable, if characters from the options are included then it will add a point, if the password is at a certain length it will add a point or 2 points if greater than 12. So, the more options and length the user chooses, the better the strength will be.

```js
const regex = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  numbers: /[0-9]/,
  symbols: /[!@#$%^&*()_+~`|}{[\]\\:;?><,./-=]/,
};
let strength = 0;
if (password.length >= 7 && password.length <= 12) {
  strength++;
} else if (password.length > 12) {
  strength += 2;
} else if (password.length <= 3) {
  return pwdStrengthToString(0);
}
if (regex.uppercase.test(password)) {
  strength++;
}
if (regex.lowercase.test(password)) {
  strength++;
}
if (regex.numbers.test(password)) {
  strength++;
}
if (regex.symbols.test(password)) {
  strength++;
}
return pwdStrengthToString(strength);
```

For multiple checkboxes, I created a file the holds all the checkbox data such as name, label and initialized a state that holds all the checkbox data like so:

```js
const [checkboxState, setCheckboxState] = useState(
  checkboxData.map((item) => {
    return { name: item.name, label: item.label, isChecked: false };
  })
);
```

And when a user checks a checkbox, an onChange will trigger a function that handles and changes the checkboxes state:

```js
setCheckboxState(
  checkboxState.map((item, i) => {
    return i === index ? { ...item, isChecked: !item.isChecked } : item;
  })
);
```

### Continued development

I would like to practice responsive web design - this includes know where to make breakpoints for certain devices, when to use grid and flexbox and best way to size fonts based on device sizes.

### Useful resources

- [Fullstack Open](https://fullstackopen.com/en/) - This amazing course has helped me learn React and become comfortable with it.
- [CSS-Tricks](https://css-tricks.com/) - Awesome website that is filled with CSS tricks and tips.

