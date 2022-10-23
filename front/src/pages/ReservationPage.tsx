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
import { useResetRecoilState } from "recoil";
import reservationPageAtom from "recoil/reservationPage/atom";
import ChatBotText from "design/ChatBotText";

const ReservationPage = () => {
  const { components, setComponent, addComponent } = useComponentHooks([]);
  const [scrollRef, scrollToBottom] = useAutoScroll();

  const onClick = () => {
    addComponent([
      <ChatBotLayout>
        <CalendarForm />
      </ChatBotLayout>,
    ]);
  };

  useEffect(() => {
    initComponents();
  }, []);

  const initComponents = async () => {
    addComponent([
      <ChatBotLayout>
        <ChatBotText>원하는 날짜, 시간, 층, 회의실을 선택해주세요.</ChatBotText>
      </ChatBotLayout>,
      <ChatBotLayout>
        <CalendarForm />
      </ChatBotLayout>,
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [components]);

  return (
    <>
      <Wrapper>
        <AppLayout name="예약하기">
          <div ref={scrollRef}>
            {components.components.map((v) => {
              return <>{v}</>;
            })}
          </div>
          {/* <button onClick={onClick}>다음</button> */}
          {/* </ContentLayout> */}
          {/* <StyledReservationPage>
            <ReservationForm />
          </StyledReservationPage> */}

          {/* <ChatLayout getText={getChat}/> */}
        </AppLayout>
        <ChatLayout />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  // width: 80%;
`;
const StyledReservationPage = styled.div`
  margin: 0 auto;
  height: 650px;
  text-align: center;
`;

export default ReservationPage;
