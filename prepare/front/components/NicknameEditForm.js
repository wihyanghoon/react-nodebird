import React from 'react'
import { Form, Input } from 'antd'
import styled from 'styled-components'

const NicknameEditForm = () => {
  return (
    <Form>
        <SearchInput addonBefore="닉네임" enterButton="수정" />
    </Form>
  )
}

const SearchInput = styled(Input.Search)`
    padding: 10px;
`

export default NicknameEditForm