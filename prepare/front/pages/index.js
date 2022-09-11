import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { LOAD_POST_REQUEST } from '../reducers/post'

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user)
  const { mainPosts, hasMorePost, getPostLoadding } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    })
  }, [])

  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !getPostLoadding) {
          dispatch({
            type: LOAD_POST_REQUEST,
          })
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [hasMorePost, getPostLoadding])

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((item) => <PostCard key={item.id} post={item} />)}
    </AppLayout>
  )
}

export default Home