import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentsData/commentsDataAction';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.commentsDataReducer.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();
  const [isFormCommentsOpen, setFormCommentsOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setFormCommentsOpen(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFormCommentsOpen(false);
  };

  const handleChange = event => {
    dispatch(updateComment(event.target.value));
  };

  return (
    <form className={style.form}>
      {isFormCommentsOpen &&
        <>
          <Text as='h3' size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            value={value}
            onChange={handleChange} />
        </>
      }
      <button className={style.btn} onClick={
        isFormCommentsOpen ? handleSubmit : handleOpen
      }>
        {isFormCommentsOpen ? 'Отправить' : 'Написать комментарий'}
      </button>
    </form>
  );
};
