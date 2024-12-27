export const showMessage = (messageElement, errorElement, message, isError = false) => {
  if (isError) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    messageElement.style.display = 'none';
  } else {
    messageElement.style.display = 'block';
    errorElement.style.display = 'none';
  }
};