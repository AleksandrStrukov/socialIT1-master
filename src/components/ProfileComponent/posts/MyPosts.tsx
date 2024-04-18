import sd from './MyPosts.module.css';
import {Post} from './post/post';
import React, {ChangeEvent} from 'react';
import {propsy} from '../../../App';

export const MyPosts = (props: propsy) => {
  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {};
let newPost = React.createRef()
  const onClick = (event: ChangeEvent<HTMLTextAreaElement>) => {
  props.addPost(event.target.value)
  }
  const onPostsChange = () => {

  }
  return (
    <div className={sd.posts}>
      <h2>MyPosts</h2>
      <div>
        <textarea ref = {newPost} onChange={onPostsChange} value={}/>
      </div>

      <button onClick={onClick}>NewPost</button>
      <Post {...props} />
    </div>
  );
};
//
// import React, {ChangeEvent, useRef} from 'react';
// import sd from './MyPosts.module.css';
// import {Post} from './post/post';
// import {propsy} from '../../../App';
//
// export const MyPosts = (props: propsy) => {
//   const newPostRef = useRef<HTMLTextAreaElement>(null);
//
//   const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     // Assuming there is a function to handle the text change
//     props.addPost(event.target.value);
//   };
//
//   const onClick = () => {
//     if (newPostRef.current) {
//       props.addPost(newPostRef.current.value);
//       newPostRef.current.value = ''; // Clear the textarea after posting
//     }
//   };
//
//   return (
//     <div className={sd.posts}>
//       <h2>MyPosts</h2>
//       <div>
//         <textarea
//           ref={newPostRef}
//           onChange={onPostChange}
//           value={props.state.newPost || ''} // Ensures the textarea is controlled by passing a value
//         />
//       </div>
//       <button onClick={onClick}>New Post</button>
//       <Post {...props} />
//     </div>
//   );
// };
