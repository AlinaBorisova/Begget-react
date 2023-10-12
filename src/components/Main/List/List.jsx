import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title_1',
      author: 'Nickname_1',
      ups: 77,
      date: '2022-01-21T09:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title_2',
      author: 'Nickname_2',
      ups: 58,
      date: '2022-01-31T09:00:00.000Z',
      id: '345',
    },
    {
      thumbnail: '',
      title: 'Title_3',
      author: 'Nickname_3',
      ups: 24,
      date: '2022-03-20T04:45:00.000Z',
      id: '567',
    },
    {
      thumbnail: '',
      title: 'Title_4',
      author: 'Nickname_4',
      ups: 128,
      date: '2022-01-03T08:45:00.000Z',
      id: '789',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map(postsData => (
        <Post key={postsData.id} postData={postsData} />
      ))};
    </ul>
  );
};
