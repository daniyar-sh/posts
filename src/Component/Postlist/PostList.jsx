import React from "react";
import PostItem from "../PostItem/PostItem";
import {TransitionGroup} from 'react-transition-group';
import { CSSTransition } from "react-transition-group";


const PostList = ({ listPosts, title, select, remove }) => {
    if (!listPosts.length) {
        return(
            <h1 style={{textAlign: 'center'}} >Посты не найдены</h1>
        )
    }

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {listPosts.map((post, index) =>
                     <CSSTransition
                     key={post.id}
                     timeout={500}
                     classNames="post"
                   >
                    <PostItem  remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList