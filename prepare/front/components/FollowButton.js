import React, { useCallback } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user'

const FollowButton = ({ post }) => {
  const { me, followingLoading, unfollowingLoading } = useSelector((state) => state.user)
  console.log(unfollowingLoading)
  const dispatch = useDispatch()

  const isFollowing = me?.Followings.find((item) => item.id === post.User.id)

  const onFollow = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      })
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id
      })
    }
  }, [isFollowing])
  
  if(post.User.id === me.id){
    return null
  }

  return (
    <Button onClick={onFollow} loading={followingLoading || unfollowingLoading}>{isFollowing ? "언팔로우" : "팔로우"}</Button>
  )
}

export default FollowButton