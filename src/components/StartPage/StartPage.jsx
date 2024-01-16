import style from './StartPage.module.css';
import {Text} from '../../UI/Text';

export const StartPage = () => (
  <div className={style.container}>
    <div className={style.startPage}>
      <Text As='h2' size={26}>Стартовая страница</Text>
      <Text As='h3' size={22}>Добро пожаловать!</Text>
      <Text As='p' size={18}>Выберите категорию</Text>
    </div>
  </div>
);
