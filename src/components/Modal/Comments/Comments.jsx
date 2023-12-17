import style from './Comments.module.css';
import Date from '../../Main/List/Post/Date';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => {
  console.log(comments);
  return (
    comments && <ul className={style.list}>
      {comments.map((item) => (
        <li key={item.id} className={style.item}>
          <Text as='h3' className={style.author} size={18} tsize={22}>
            {item.author === '[deleted]' ? 'Удалено' : item.author}
          </Text>
          <Text as='p' className={style.comment} size={14} tsize={18}>
            {item.body === '[removed]' ? 'Удалено' : item.body}
          </Text>
          <Date date={item.created}/>
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
