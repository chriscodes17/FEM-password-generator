const checkPasswordStrength = (password) => {
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
};

const pwdStrengthToString = (strength) => {
  if (strength <= 1) {
    return "TOO WEAK";
  } else if (strength <= 3) {
    return "WEAK";
  } else if (strength <= 5) {
    return "MEDIUM";
  } else {
    return "STRONG";
  }
};

export default checkPasswordStrength;
