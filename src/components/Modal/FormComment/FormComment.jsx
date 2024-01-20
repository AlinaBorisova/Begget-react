import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentUpdate} from '../../../store/comment/commentAction';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();
  const [isFormCommentOpen, setFormCommentOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setFormCommentOpen(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFormCommentOpen(false);
  };

  const handleChange = event => {
    dispatch(commentUpdate(event.target.value));
  };

  return (
    <form className={style.form}>
      {isFormCommentOpen &&
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
        isFormCommentOpen ? handleSubmit : handleOpen
      }>
        {isFormCommentOpen ? 'Отправить' : 'Написать комментарий'}
      </button>
    </form>
  );
};
