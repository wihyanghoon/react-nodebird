import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { useCallback } from 'react';
import { addPostAction } from '../reducers/post'
import { useRef } from 'react';

const PostForm = () => {
    const { imagePath, addPostLoadding, addPostDone } = useSelector((state) => state.post);
    const imageInput = useRef();
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    useEffect(()=> {
        if(addPostDone){
            setText('')
        }
    },[addPostDone])

    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        dispatch(addPostAction(text))
    }, [text])

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
                <Button type="primary" style={{ float: "right" }} htmlType="submit" loading={addPostLoadding}>짹짹</Button>
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