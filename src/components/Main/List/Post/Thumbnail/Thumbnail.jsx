import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';


export const Thumbnail = ({thumbnail, title}) => (
  <img className={style.img} src={thumbnail} alt={title}/>
);

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
