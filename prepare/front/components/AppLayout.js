import React, { useState } from 'react'
import Link from 'next/link'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.user)

    console.log(isLoggedIn)

    return (
        <div>
            <Global />
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/">노드버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://www.naver.com" target={'_blank'} rel="noreferre noopener">향훈</a>
                </Col>
            </Row>

        </div>

    )
}



export default AppLayout