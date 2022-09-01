import React from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostForm from '../components/PostForm'

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const { mainPosts } = useSelector((state) => state.post)

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((item) => <PostCard key={item.id} post={item}/>)}
    </AppLayout>
  )
}

export default Home