import s from './post.module.css';
import {propsy} from '../../../../App';

export const Post = (props: propsy) => {
  return (
    <div>
      {props.state.posts.map(post => (
        <div className={s.item}>
          <img src={post.image} />
          {post.message}
        </div>
      ))}
    </div>
  );
};
