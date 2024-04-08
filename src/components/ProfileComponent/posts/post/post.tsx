import s from './post.module.css'
type props = {
  message: string;
  image: string;
};
export const Post = (props: props) => {
  return (
    <div>
      <div className={s.item}>
        <img src={props.image} />
        {props.message}
      </div>
    </div>
  );
};
