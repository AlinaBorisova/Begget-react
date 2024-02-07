import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsRequest
} from '../store/commentsData/commentsSlice';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  const status = useSelector(state => state.commentsReducer.status);
  const post = useSelector(state => state.commentsReducer.post);
  const comments = useSelector(state => state.commentsReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequest(id));
  }, [token, id]);

  return [status, post, comments];
};
