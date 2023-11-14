import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';
import Content from './Content';
import Rating from './Rating';
import DeleteButton from './DeleteButton';
// import {useBest} from '../../../../hooks/useBest';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  // useBest();
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title}/>
      <Content title={title} author={author}/>
      <DeleteButton />
      <Rating ups={ups}/>
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

