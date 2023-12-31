export const setToken = (token) => {
  if (token) {
    localStorage.setItem('bearer', token);
  }
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};

// import {useState, useEffect} from 'react';
// export const token = (state) => {
//   const [token, setToken] = useState(state);
//
//   useEffect(() => {
//     if (location.pathname.includes('/auth')) {
//       const token = new URLSearchParams(location.hash.substring(1))
//         .get('access_token');
//       setToken(token);
//     }
//
//     if (localStorage.getItem('bearer')) {
//       setToken(localStorage.getItem('bearer'));
//     }
//   }, [token]);
//
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('bearer', token);
//     }
//   }, [token]);
//
//   const delToken = () => {
//     if (token) {
//       localStorage.removeItem('bearer');
//       window.location.href = location.origin;
//     }
//   };
//
//   return [token, delToken];
// };
