import sd from './MyPosts.module.css';
import {Post} from './post/post';
import {posts} from '../../../index';

export const MyPosts = (props: posts[]) => {
  // let posstsData = [
  //   {
  //     message: 'I am fine!',
  //     image: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-shy-minion-transparent-png-stickpng-31.png',
  //     id: '1',
  //   },
  //   {
  //     message: 'I am Web developer!',
  //     image: 'https://www.freepnglogos.com/uploads/minions-png/dancing-minions-transparent-png-stickpng-18.png',
  //     id: '2',
  //   },
  //   {
  //     message: ' I am in USA!',
  //     image:
  //       'https://www.freepnglogos.com/uploads/minions-png/minions-png-minion-concerned-transparent-png-stickpng-24.png',
  //     id: '3',
  //   },
  // ];
  return (
    <div className={sd.posts}>
      <h2>MyPosts</h2>
      <div>
        <textarea></textarea>
      </div>

      <button>NewPost</button>
      <Post {...props} />
    </div>
  );
};
