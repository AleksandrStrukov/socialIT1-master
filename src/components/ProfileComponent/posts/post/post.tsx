import s from './post.module.css';
import {posts} from '../../../../index';

export const Post = (props: posts[]) => {
  return (
    <div>
      {props.map(post => (
        <div className={s.item}>
          <img src={post.image} />
          {post.message}
        </div>
      ))}
    </div>
  );
};
