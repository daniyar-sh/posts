import React from "react";
import { useNavigate } from 'react-router-dom';
import MyButton from "../../UI/button/MyButton";



const PostItem = ({ post, number, select, remove }) => {
  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    router(`/posts/${post.id}`);
}
  return (
    <div className="post">
      <div className="post__contaent">
        <strong>{post.id}. {post.title}</strong>
        <div >
          {post.body} 
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={handleSubmit }>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem