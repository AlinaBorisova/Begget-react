import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useBest = () => {
  const [post, setPost] = useState('');
  const token = useSelector(state => state.token);
  console.log('token:', token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
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
        setPost(data);
      })
      .catch(error => console.log(error));
  }, [token]);

  if (post) return post.data;
};
