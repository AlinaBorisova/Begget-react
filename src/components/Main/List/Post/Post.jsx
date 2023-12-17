import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
// import formatDate from '../../../../utils/formatDate';
import Content from './Content';
import Rating from './Rating';
import DeleteButton from './DeleteButton';
import {Thumbnail} from './Thumbnail/Thumbnail';
import Date from './Date';

export const Post = ({postData}) => {
  const {
    id,
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created: date,
  } = postData;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={
          thumbnail.match(/([^\s]+(?=\.(jpg|jpeg))\.)/) ?
          thumbnail : notphoto
      } title={title}/>
      <Content id={id} title={title} author={author} markdown={markdown} />
      <DeleteButton />
      <Rating ups={ups}/>
      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

