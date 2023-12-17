import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef, useState} from 'react';

export const FormComment = () => {
  const textareaRef = useRef(null);
  const [isFormCommentsOpen, setFormCommentsOpen] = useState(false);

  const handleOpen = () => {
    setFormCommentsOpen(true);
    if (textareaRef.current !== null) {
      textareaRef.current.focus();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(textareaRef.current.value);
    textareaRef.current.value = null;
    setFormCommentsOpen(false);
  };

  return (
    <form className={style.form}>
      {isFormCommentsOpen &&
        <>
          <Text as='h3' size={14} tsize={18}>
            Имя авторизованного пользователя
          </Text>
          <textarea className={style.textarea} ref={textareaRef}></textarea>
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
