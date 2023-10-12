import style from './Tabs.module.css';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomID';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [dropDownValue, setDropDownValue] = useState('Выберите категорию');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  const handleClick = e => {
    setDropDownValue(e.target.textContent);
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <Text As='button'
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            fontWeight='bold'
          >
            {dropDownValue}
            <ArrowIcon width={15} height={15} />
          </Text>
        </div>
      )}

      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text As='button'
                className={style.btn}
                onClick={handleClick}
                fontWeight='normal'
              >
                {value}
                {Icon && <Icon width={25} height={25} />}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

