import React, { useState } from "react";
import styled from "@emotion/styled";

import CalendarForm from "components/CalendarForm";
import ReservationForm from "components/ReservationForm";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";

const ReservationPage = () => {

  const [count, setCount] = useState(0);
  const [arr, setArr] = useState<React.ReactNode[]>([]);
  const onClick = () => {
    setArr([...arr, <CalendarForm />]);
    setCount(count + 1);
    console.log(arr);
  }
  return (
    <AppLayout>
      <ChatBotLayout>
        <CalendarForm />
      </ChatBotLayout>
      {arr.map(v=>{
        return       <ChatBotLayout>
        {v}
      </ChatBotLayout>
      })}
      <button onClick={onClick}>다음</button>

      {/* <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout />
      <ChatBotLayout /> */}
      {/* <StyledReservationPage>
        <ReservationForm />
      </StyledReservationPage> */}
    </AppLayout>
  );
};

const StyledReservationPage = styled.div`
  margin: 0 auto;
  height: 650px;
  text-align: center;
`;

export default ReservationPage;
