const API_URL = 'http://localhost:3001/api';

export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append('pdf', file);

  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Upload failed');
  }

  return response.json();
};