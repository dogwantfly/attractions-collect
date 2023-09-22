import axios from 'axios';
export const getToken = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}