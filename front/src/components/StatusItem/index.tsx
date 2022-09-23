import styled from '@emotion/styled'
import React from 'react'

type Props = {
    date: string,
    time: string
}

const StatusItem = ({date, time}: Props): JSX.Element => {
  return (
    <>
        <Content>{date} {time}</Content>
    </>
    
  )
}

const Content = styled.h2`
    
`

export default StatusItem;