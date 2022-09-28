import styled from '@emotion/styled'
import React, { MouseEventHandler } from 'react'

type Props = {
    key: string,
    date: string,
    time: string,
    onClick: MouseEventHandler
}

const StatusItem = ({key, date, time, onClick}: Props): JSX.Element => {
  return (
    <div onClick={onClick}>
        <Content>{date} {time}</Content>
    </div>
  )
}

const Content = styled.h2`
    border: 1px solid black;
    background: orange;
    cursor: pointer;
    color: white;
    padding: 2rem;
`

export default StatusItem;