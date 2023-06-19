import jwtDecode from 'jwt-decode';
import { authService } from '../apis/authService';

export const authVerifySession = () => {
  const token = authService.getToken();
  if (token) {
    const decodedJwt = jwtDecode<any>(token);
    if (decodedJwt.exp * 1000 < Date.now()) {
      authService.logout();
    }
  }
};
