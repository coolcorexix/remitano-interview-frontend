import axios from 'axios';
import { localStorage } from './localStorage';

const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const { url, headers } = config;

  /**
   * Some APIs don't require authentication in header.
   * Note: When you add a new url, please document it in the list below.
   *
   * URLs:
   * - /api/login
   */
  const urlRegexList = [/\/\/register/];

  if (url) {
    const isMatched = urlRegexList.some((rgx) => rgx.test(url));
    if (isMatched) {
      return config;
    }
  }

  const access_token = localStorage.get('token');
  const token = JSON.parse(access_token);
  if (token && headers) {
    headers['authorization'] = `${token}`;
  }

  return config;
});

export { apiClient };
