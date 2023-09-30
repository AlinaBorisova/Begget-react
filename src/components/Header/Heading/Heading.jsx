import style from './Heading.module.css';

// eslint-disable-next-line react/prop-types
export const Heading = ({text}) => (
  <h1 className={style.heading}>{text}</h1>
);
