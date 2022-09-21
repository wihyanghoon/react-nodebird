import React, { useState } from 'react'
import { Card, Popover, Button, Avatar, List, Comment } from 'antd'
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import PostImages from './PostImages'
import { useCallback } from 'react'
import CommentForm from './CommentForm'
import PostCardContent from './PostCardContent'
import { REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST } from '../reducers/post'
import FollowButton from './FollowButton'

const PostCard = ({ post }) => {
    const { removePostLoadding } = useSelector((state) => state.post)
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id)
    const liked = post.Likers.find((item) => item.id === id)

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev)
    }, []);

    const onRemoveHandler = useCallback(() => {
        dispatch(
            {
                type: REMOVE_POST_REQUEST,
                data: post.id
            }
        )
    }, [])

    const onLike = useCallback(() => {
        dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id
        })
    }, [])

    const onUnLike = useCallback(() => {
        dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id
        })
    }, [])

    const onRetweet = useCallback(()=>{
        if(!id){
            return alert('로그인이 필요합니다.')
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id
        })
    },[id])

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" onClick={onRetweet}/>,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onLike} />
                        : <HeartOutlined key="heart" onClick={onUnLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button onClick={onRemoveHandler} loading={removePostLoadding}>삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                extra={id && <FollowButton post={post} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout='horizontal'
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    key={item.id}
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div >
    )
}

export default PostCard