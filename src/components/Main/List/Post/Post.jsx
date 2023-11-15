import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import Content from './Content';
import Rating from './Rating';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
  const {title, author, ups, created} = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title}/>
      <Content title={title} author={author}/>
      <DeleteButton />
      <Rating ups={ups}/>
      <time className={style.date} dateTime={created}>
        {formatDate(created)}
      </time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

