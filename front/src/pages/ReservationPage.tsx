import React, { useState } from "react";
import styled from "@emotion/styled";

import CalendarForm from "components/CalendarForm";
import ReservationForm from "components/ReservationForm";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";
import ChatLayout from "layouts/ChatLayout";
import UserChatLayout from "layouts/UserChatLayout";

const ReservationPage = () => {

  const [count, setCount] = useState(0);
  const [arr, setArr] = useState<React.ReactNode[]>([]);

  const getChat = (text: string) => {
      console.log(text);
      if(text == "") return;
      // setChat([...chat, text]);
      setArr([...arr, <UserChatLayout>{text}</UserChatLayout>])
  }

  const onClick = () => {
    // const temp: React.ReactNode[] = Array.from({length: 5000}, () => {return <CalendarForm />})
    setArr([...arr,<ChatBotLayout><CalendarForm /></ChatBotLayout>]);
    setCount(count + 1);
    // setChat([])
    console.log(arr);
  }
  return (
    <>

      <Wrapper>
        <AppLayout>
            <ChatBotLayout>
              <CalendarForm />
            </ChatBotLayout>
            {arr.map(v=>{
              return (

              // <UserChatLayout>
              <>
                {v}
              </>
            // </UserChatLayout>
              )
            })}
            <button onClick={onClick}>다음</button>
          {/* </ContentLayout> */}
        {/* <StyledReservationPage>
            <ReservationForm />
          </StyledReservationPage> */}
          
          {/* <ChatLayout getText={getChat}/> */}
        </AppLayout>
        <ChatLayout getText={getChat}/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  // width: 80%;
`
const StyledReservationPage = styled.div`
  margin: 0 auto;
  height: 650px;
  text-align: center;
`;

export default ReservationPage;
