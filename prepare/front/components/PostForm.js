import React from 'react'
import { Form, Input, Button } from 'antd'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useCallback } from 'react';

const PostForm = () => {
    const { imagePath } = useSelector((state) => state.post);
    const [text, onChangeText] = useState("");
    const onSubmit = useCallback(() => {

    }, [])

    return (
        <Form encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChage={onChangeText}
                maxLength={140}
                placeholder='어떠한 일이 있었나요?'
            />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
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