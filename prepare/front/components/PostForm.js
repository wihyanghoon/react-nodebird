import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGES_SUCSESS, ADD_POST_REQUEST } from '../reducers/post'

const PostForm = () => {
    const { imagePath, addPostLoadding, addPostDone } = useSelector((state) => state.post);
    const imageInput = useRef();
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (addPostDone) {
            setText('')
        }
    }, [addPostDone])

    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
        const formData = new FormData();
        imagePath.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        console.log(formData)
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePath]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])

    const removeImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGES_SUCSESS,
            data: index
        })
    }, [])

    const onChangeImages = useCallback((e) => {
        const imagesData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imagesData.append('image', f)
        })
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imagesData,
        })
    }, [])
    return (
        <Form encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder='어떠한 일이 있었나요?'
            />
            <div>
                <input type="file" name='image' multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: "right" }} htmlType="submit" loading={addPostLoadding}>짹짹</Button>
            </div>
            <div>
                {imagePath.map((item, index) => (
                    <div key={item}>
                        <img src={`http://localhost:3065/${item}`} alt={item} style={{ width: '200px' }} />
                        <div>
                            <Button onClick={removeImage(index)}>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm