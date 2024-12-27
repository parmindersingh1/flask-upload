import axios from 'axios';
import { API_CONFIG } from '../config.js';

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout
});