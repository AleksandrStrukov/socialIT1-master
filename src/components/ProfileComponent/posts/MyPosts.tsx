import sd from './MyPosts.module.css'
import {Post} from './post/post';

export const MyPosts = () => {
  return (
    <div className={sd.posts}>
      <h2>MyPosts</h2>
      <div>
        <textarea></textarea>
      </div>

      <button>NewPost</button>
      <Post
        message=" I am fine!"
        image="https://www.freepnglogos.com/uploads/minions-png/minions-png-shy-minion-transparent-png-stickpng-31.png"
      />
      <Post
        message=" I am Web developer!"
        image="https://www.freepnglogos.com/uploads/minions-png/dancing-minions-transparent-png-stickpng-18.png"
      />
      <Post
        message=" I am in USA!"
        image="https://www.freepnglogos.com/uploads/minions-png/minions-png-minion-concerned-transparent-png-stickpng-24.png"
      />
    </div>
  );
};
