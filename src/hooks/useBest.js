import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postDataRequestAsync} from '../store/postData/postDataAction';

export const useBest = () => {
  const posts = useSelector(state => state.postDataReducer.posts);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.postDataReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postDataRequestAsync());
  }, [token]);

  return [posts, loading];
};
