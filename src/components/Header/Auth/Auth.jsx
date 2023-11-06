import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(error => {
        if (error.message === '401') {
          delToken();
          setAuth({});
        }
      });
  }, [token]);

  const handleClick = () => {
    if (!showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
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
              onClick={handleClick}
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
            onClick={delToken}
          >
            Выйти
          </button> :
            null
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
