import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showBtn, setShowBtn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);
  const getOut = () => {
    if (!showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {
        auth.name ? (
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
