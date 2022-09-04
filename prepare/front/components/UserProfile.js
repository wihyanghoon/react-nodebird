import React, { useCallback } from 'react'
import { Avatar, Card, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRequestAction } from '../reducers/user'


const UserProfile = () => {
  const dispatch = useDispatch()
  const { me, isLoggingOut } = useSelector((state) => state.user)

  const logaoutHandler = useCallback(()=>{
    dispatch(logoutRequestAction())
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">트윗<br />0</div>,
        <div key="followings">팔로워<br />0</div>,
        <div key="fd">팔로윙<br />0</div>
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <Button onClick={logaoutHandler} loading={isLoggingOut}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile