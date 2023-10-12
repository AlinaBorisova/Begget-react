import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rating = (props) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <Text As='p' fontWeight='bold'>{props.ups}</Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
