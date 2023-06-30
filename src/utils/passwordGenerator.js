const generatePassword = (length, options) => {
  const { uppercase, lowercase, numbers, symbols } = options;
  if (length === 0) {
    length = 10;
  }
  let charset = "";
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    charset += "0123456789";
  }
  if (symbols) {
    charset += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  }

  if (charset.length === 0) {
    return generatePassword(length, {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    });
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
};

export default generatePassword;

