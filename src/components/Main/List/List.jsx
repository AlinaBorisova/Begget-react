import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  postDataRequest,
  changePage,
  searchRequest
} from '../../../store/postData/postDataSlice';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postDataReducer.posts);
  const search = useSelector(state => state.postDataReducer.search);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(changePage(page));
  }, [dispatch, page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (search) {
          dispatch(searchRequest(search));
        } else {
          dispatch(postDataRequest());
        }
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
  }, [dispatch, search, endList.current]);

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
