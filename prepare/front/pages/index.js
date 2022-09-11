import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { LOAD_POST_REQUEST } from '../reducers/post'

const Home = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //   })
  // })

  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY. d)
    }
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, [])

  const { me } = useSelector((state) => state.user)
  const { mainPosts } = useSelector((state) => state.post)

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((item) => <PostCard key={item.id} post={item} />)}
    </AppLayout>
  )
}

export default Home