import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useContext, useRef, useState} from 'react';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const textareaRef = useRef(null);
  const {auth} = useContext(authContext);
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
            {auth.name}
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
