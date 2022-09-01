import React from 'react'
import { Form, Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { useCallback } from 'react';
import { addPost } from '../reducers/post'
import { useRef } from 'react';

const PostForm = () => {
    const { imagePath } = useSelector((state) => state.post);
    const imageInput = useRef();
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, [])
    const onSubmit = useCallback(() => {
        dispatch(addPost)
        setText("")
    }, [])

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])

    return (
        <Form encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder='어떠한 일이 있었나요?'
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: "right" }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {/* {imagePath.map((item) => (
                    <div key={item}>
                        <img src={item} alt={item} style={{ width: '200px' }} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))} */}
            </div>
        </Form>
    )
}

export default PostForm