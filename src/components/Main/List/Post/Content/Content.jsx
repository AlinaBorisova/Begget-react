import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';


export const Content = ({title, author, markdown}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2'>
        <Text
          As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href="#post"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal markdown={markdown} title={title} author={author}/>
      )}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
