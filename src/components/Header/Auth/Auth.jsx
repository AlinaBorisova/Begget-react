import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/token/tokenAction';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/Preloader/Preloader';

export const Auth = () => {
  const dispatch = useDispatch();

  const [showBtn, setShowBtn] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

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
    window.location.href = location.origin;
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
      {
        showBtn ?
          <button
            className={style.logout}
            onClick={logOut}
          >
            Выйти
          </button> :
            null
      }
    </div>
  );
};
