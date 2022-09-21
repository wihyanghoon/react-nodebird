import React, { useEffect } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_FOLLOWER_REQUEST, LOAD_FOLLWING_REQUEST} from '../reducers/user'
import Router from 'next/router'

const Profile = () => {
  const { me } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!(me && me.id)){
      Router.push('/')
    }
  }, [!(me && me.id)])

  if (!me) {
    return null
  }

  useEffect(()=>{
    dispatch({
      type: LOAD_FOLLOWER_REQUEST
    })
    dispatch({
      type: LOAD_FOLLWING_REQUEST
    })
  } , [])

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
    </>
  )
}

export default Profile