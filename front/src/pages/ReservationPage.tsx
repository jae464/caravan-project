import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";

import CalendarForm from "components/CalendarForm";
import ReservationForm from "components/ReservationForm";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";
import ChatLayout from "layouts/ChatLayout";
import UserChatLayout from "layouts/UserChatLayout";
import useAutoScroll from "hooks/useAutoScroll";
import useComponentHooks from "hooks/useComponentAdd";

const ReservationPage = () => {
  
  const {components, setComponent, addComponent} = useComponentHooks([]);
  const [scrollRef, scrollToBottom] = useAutoScroll();
  
  const getChat = (text: string) => {
      console.log(text);
      if(text === "") return;
      // setArr([...arr, <UserChatLayout>{text}</UserChatLayout>])
      addComponent(<UserChatLayout>{text}</UserChatLayout>)
  }

  const onClick = () => {
    addComponent(<ChatBotLayout><CalendarForm /></ChatBotLayout>);
    console.log(components);
  }

  useEffect(()=>{
    scrollToBottom()
  },[components]);
  
  return (
    <>

      <Wrapper>
        <AppLayout>
            <ChatBotLayout>
              <CalendarForm />
            </ChatBotLayout>
            <div ref={scrollRef}>
            {components.components.map(v=>{
              return (
              <>
                {v}
              </>
              )
            })}
            </div>
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
