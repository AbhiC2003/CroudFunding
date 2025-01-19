export const validateInput = (input, type) => {
    switch (type) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
      case "password":
        return input.length >= 6;
      default:
        return input.trim() !== "";
    }
  };
  