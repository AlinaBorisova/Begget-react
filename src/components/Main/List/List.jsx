import style from './List.module.css';
import Post from './Post';
import {useBest} from '../../../hooks/useBest';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const [posts, loading] = useBest();

  if (posts) {
    return (
      <ul className={style.list}>
        {loading ? (<Preloader />) : posts.map(postsData => (
          <Post key={postsData.data.id} postData={postsData.data} />
        ))}
      </ul>
    );
  }
};
