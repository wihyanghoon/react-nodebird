import React, { useCallback } from 'react'
import { Avatar, Card, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { logOutAction } from '../reducers/user'


const UserProfile = () => {
  const dispatch = useDispatch()

  const logaoutHandler = useCallback(()=>{
    dispatch(logOutAction())
  }, [])
  return (
    <Card
      actions={[
        <div key="twit">트윗<br />0</div>,
        <div key="followings">팔로워<br />0</div>,
        <div key="fd">팔로윙<br />0</div>
      ]}
    >
      <Card.Meta avatar={<Avatar>향</Avatar>} title="향훈" />
      <Button onClick={logaoutHandler}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile