import s from './post.module.css';
import {state} from '../../../Redux/state';

export const Post = (props: state) => {
  return (
    <div>
      {props.posts.map(post => (
        <div className={s.item}>
          <img src={post.image} />
          {post.message}
        </div>
      ))}
    </div>
  );
};
