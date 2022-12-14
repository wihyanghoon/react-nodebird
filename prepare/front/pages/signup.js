import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import Router from 'next/router'
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST, LOAD_MYINFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
const TextInput = ({ value }) => {
  return (
    <div>{value}</div>
  )
};

TextInput.propTypes = {
  value: PropTypes.string,
};

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpErr, me } = useSelector((state) => state.user)
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [email, onChangeEmail] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (signUpDone) {
      Router.push('/')
    }
  }, [signUpDone])

  useEffect(() => {
    if (signUpErr) {
      alert(signUpErr)
    }
  }, [signUpErr])

  useEffect(() => {
    if((me && me.id)){
      Router.replace('/')
    }
  }, [me && me.id])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nick, password)
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, nick, password }
    })
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <AppLayout>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <TextInput />
        <div>
          <label htmlFor="user-email">?????????</label>
          <br />
          <Input name="user-email" type='email' value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">?????????</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">????????????</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">??????????????????</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div style={{ color: 'red' }}>??????????????? ???????????? ????????????.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>????????? ?????? ??? ?????? ?????? ???????????????.</Checkbox>
          {termError && <div style={{ color: 'red' }}>????????? ??????????????? ?????????.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>????????????</Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = ""
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie
  }
  context.store.dispatch({
    type: LOAD_MYINFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
})

export default Signup;