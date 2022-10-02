import React from 'react'
import styled from '@emotion/styled'

const ChatBotText = ({children}: {children: React.ReactNode}) => {
  return (
    <Text>{children}</Text>
  )
}

const Text = styled.span`
    font-size: 1.3rem;
    color: #8A8A8A;
`
export default ChatBotText