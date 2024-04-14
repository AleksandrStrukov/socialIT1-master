import sd from './MyPosts.module.css';
import {Post} from './post/post';
import {ChangeEvent} from 'react';
import {state} from '../../Redux/state';

export const MyPosts = (props: state) => {
  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {};

  return (
    <div className={sd.posts}>
      <h2>MyPosts</h2>
      <div>
        <textarea onChange={onPostChange} value={'ddd'} />
      </div>

      <button>NewPost</button>
      <Post {...props} />
    </div>
  );
};
