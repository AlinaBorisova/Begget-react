import style from './Content.module.css';
import PropTypes from 'prop-types';


export const Content = (props) => {
  console.log(style);
  return (
    <div className={style.content}>
      <h2>
        <a className={style.linkPost} href="#post">
          {props.title}
        </a>
      </h2>
      <a className={style.linkAuthor} href="#author">
        {props.author}
      </a>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
