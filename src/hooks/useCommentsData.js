import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsDataRequestAsync
} from '../store/commentsData/commentsDataAction';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  const status = useSelector(state => state.commentsDataReducer.status);
  const post = useSelector(state => state.commentsDataReducer.post);
  const comments = useSelector(state => state.commentsDataReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token, id]);

  return [status, post, comments];
};
