import React from 'react'
import { Form, Input, Button } from 'antd'
import { useCallback } from 'react'
import useInput from '../hooks/useInput'
import { useSelector } from 'react-redux'

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id)
    const [commentText, onChangeCommentText] = useInput('')
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText)
    }, [commentText])
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:"relative", margin:0}}>
                <Input.TextArea valuse={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type="primary" htmlType='submit' style={{float:'right'}}>삐약</Button>
            </Form.Item>
        </Form>
    )
}

export default CommentForm