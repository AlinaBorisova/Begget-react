import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/token/tokenAction';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {useNavigate} from 'react-router-dom';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const [auth, loading, clearAuth, status, error] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'loaded') {
      navigate('/');
    }
  }, [status]);

  useEffect(() => {
    if (status === 'error') console.log(error);
  }, [error]);

  const getOut = () => {
    if (!showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
    setShowBtn(false);
    navigate('/');
  };

  return (
    <div className={style.container}>
      {
        loading ? (<Preloader />) : auth.name ? (
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
              onClick={getOut}
            />
          </button>
        ) : (
            <Text className={style.authLink} As='a' href={urlAuth}>
              <LoginIcon className={style.svg}/>
            </Text>
        )}
      {showBtn &&
        <button className={style.logout} onClick={logOut}> Выйти </button>
      }
    </div>
  );
};
