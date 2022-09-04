import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/dist/client/link';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const LoginForm = () => {
    const dispatch = useDispatch()
    const { logInLoading } = useSelector((state) => state.user)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePw = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        dispatch(loginRequestAction({ email, password }))
    }, [email, password])

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input type="text" name='user-id' value={email} onChange={onChangeEmail} />
            </div>
            <div>
                <label htmlFor="user-id">비밀번호</label>
                <br />
                <Input type="password" name='user-id' value={password} onChange={onChangePw} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><Button>회원가입</Button></Link>
            </ButtonWrapper>
        </Form>
    )
}

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

export default LoginForm