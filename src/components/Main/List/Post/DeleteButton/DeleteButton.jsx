import style from './DeleteButton.module.css';
import {ReactComponent as DeleteIcon} from '../img/delete.svg';


export const DeleteButton = () => (
  <button className={style.delete}>
    <DeleteIcon />
  </button>
);
