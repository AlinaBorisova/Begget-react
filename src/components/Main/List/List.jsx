import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postContext} from '../../../context/postContext';

export const List = () => {
  const {post} = useContext(postContext);

  if (post) {
    return (
      <ul className={style.list}>
        {post.children.map(postsData => (
          <Post key={postsData.data.id} postData={postsData.data} />
        ))}
      </ul>
    );
  }
};
