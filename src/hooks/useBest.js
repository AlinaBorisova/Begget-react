import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBest = () => {
  const [post, setPost] = useState({});
  const {token} = useContext(tokenContext);

  console.log(token);

  useEffect(() => {
    fetch(`${URL_API}/best?limit=4`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => {
        console.log('data', data);
        setPost(data);
      })
      .catch(error => console.log(error));
  }, [token]);

  return [post, setPost];
};
