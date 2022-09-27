import React, { useState } from 'react'
import Calendar from 'react-calendar'
import styled from '@emotion/styled';

const CalendarForm = () => {
    const [value, onChange] = useState(new Date());
  return (

    <CustomCalendar onChange={onChange} />

  )
}

const CustomCalendar = styled(Calendar)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
`


export default CalendarForm