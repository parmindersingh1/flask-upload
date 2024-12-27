export const isPDF = (file) => file.type === 'application/pdf';

export const validateFileInput = (file) => {
  if (!file) {
    throw new Error('Please select a file');
  }
  if (!isPDF(file)) {
    throw new Error('Please select a PDF file');
  }
};