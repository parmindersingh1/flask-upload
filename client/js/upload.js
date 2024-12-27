import { uploadPDF } from './api/upload-service.js';
import { validateFileInput } from './utils/validation.js';
import { showMessage } from './ui/messages.js';

const fileInput = document.getElementById('pdfFile');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

export const handleUpload = async () => {
  try {
    const file = fileInput.files[0];
    validateFileInput(file);
    
    await uploadPDF(file);
    showMessage(successMessage, errorMessage, 'File uploaded successfully');
    fileInput.value = '';
  } catch (error) {
    showMessage(successMessage, errorMessage, error.message, true);
  }
};