import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postDataRequestAsync} from '../../../store/postData/postDataAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postDataReducer.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postDataRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postDataRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {(posts.map(({data}) => <Post key={data.id} postData={data} />))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
