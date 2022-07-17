import React, {useEffect, useState, useRef} from 'react';
import { usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import {getPageCount} from '../utils/pages';
import PostForm from '../Component/PostForm/PostForm';
import PostList from '../Component/Postlist/PostList';
import PostFilter from '../Component/PostFilter/PostFilter';
import MyModal from '../Component/MyModal/Mymodal';
import MyButton from '../UI/button/MyButton';
import PostService from '../API/PostService';
import Looder from '../UI/Looder/Looder';
import Pagination from '../UI/Pagination/Pagination';
import MySelect from '../UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    
    setPosts(...response, ...response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(i => i.id !== post.id));
  };

  const changrPage = (page) => {
    setPage(page)
    
  };
 
  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)} >
        создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter} 
        setFilter={setFilter}
      />
      <MySelect
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue="Кол-во элементов на странице"
          options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'Показать все'},
          ]}
       />
      {postError && 
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostList  remove={removePost} listPosts={sortAndSearchedPosts} title='Посты про Js'/>
      <div ref={lastElement} style={{height: 20, background: 'red'}}/>
      {isPostsLoading &&
        <div style={{display:'flex', justifyContent:'center', marginTop:'50'}}><Looder/></div>
      }
      <Pagination 
        page={page}
        changePage={changrPage}
        totalPages={totalPages} 
      />
    </div>
  );
}

export default Posts

