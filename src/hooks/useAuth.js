import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/authAction';

export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
