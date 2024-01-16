export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};

