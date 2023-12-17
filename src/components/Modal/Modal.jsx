import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import React, {useEffect, useRef} from 'react';
import Comments from './Comments';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../UI/Text';
import FormComment from './FormComment';
// не работает клик по крестику

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [commentsData] = useCommentsData(id);
  const comments = commentsData[1];
  const post = commentsData[0];

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEsc = ({key}) => {
    if (key === 'Escape') closeModal();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClick);
      document.addEventListener('keydown', handleEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {post ?
            <>
              <h2 className={style.title}>{post?.title}</h2>
              <div className={style.content}>
                <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}>
                  {post?.selftext}
                </Markdown>
              </div>
              <Text As='p' className={style.author}>{post?.author}</Text>
              <FormComment />
              <Comments comments={comments} />
              <button className={style.close}>
                <CloseIcon />
              </button>
            </> : (<h2>Идет загрузка...</h2>)
        }
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
