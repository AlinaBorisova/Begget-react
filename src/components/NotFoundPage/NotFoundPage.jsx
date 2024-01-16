import style from './NotFoundPage.module.css';
import {Text} from '../../UI/Text';

export const NotFoundPage = () => (
  <div className={style.container}>
    <div className={style.notFoundPage}>
      <Text As='h2' size={24} color='#cc6633'>404</Text>
      <Text As='h3' size={22}>Ooops...</Text>
      <Text As='p' size={18}>Page is not found</Text>
    </div>
  </div>
);
