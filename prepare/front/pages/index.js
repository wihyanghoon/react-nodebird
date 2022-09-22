import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { END } from 'redux-saga'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
import { LOAD_MYINFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'

const Home = () => {
  const dispatch = useDispatch();
  const { me, logInErr } = useSelector((state) => state.user)
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetErr } = useSelector((state) => state.post)

  useEffect(() => {
    if (retweetErr) {
      alert(retweetErr)
    }
  }, [retweetErr])

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts])

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((item) => <PostCard key={item.id} post={item} />)}
    </AppLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = cookie
  context.store.dispatch({
    type: LOAD_MYINFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
})
export default Home