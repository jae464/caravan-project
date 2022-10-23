import styled from "@emotion/styled";
import { getAllReservation } from "api/reservation";
import FloorDrawing from "components/FloorDrawing";
import ChatBotText from "design/ChatBotText";
import useAutoScroll from "hooks/useAutoScroll";
import useComponentHooks from "hooks/useComponentAdd";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";
import ChatLayout from "layouts/ChatLayout";
import moment from "moment";
import { useEffect, useState } from "react";
import { Reservation } from "types/reservation";

const MeetingRoomStatusPage = () => {
  const { components, setComponent, addComponent } = useComponentHooks([]);
  const [scrollRef, scrollToBottom] = useAutoScroll();
  const currentDate = moment().format("YYYY-MM-DD HHMM");
  const [reservationList, setReservationList] = useState<Reservation[] | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const data: Reservation[] = await getAllReservation();
      setReservationList(data);
    })();
    initComponents();
  }, []);

  const filteredReservationList = reservationList?.filter((e: Reservation) => {
    const startTime = e.startTime ?? 0;
    const endTime = e.endTime ?? 9999;
    const currentTime = Number(currentDate.split(" ")[1]);
    return (
      moment(e.meetingDate).format("YYYY-MM-DD") ===
        currentDate.split(" ")[0] &&
      startTime < currentTime &&
      endTime > currentTime
    );
  });

  const initComponents = async () => {
    addComponent([
      <>
        <ChatBotLayout>
          <ChatBotText>{currentDate} 기준 회의실 현황입니다</ChatBotText>
        </ChatBotLayout>
        <ChatBotLayout>
          <FloorDrawing reservationList={filteredReservationList} />
        </ChatBotLayout>
        <ChatLayout />
      </>,
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [components]);

  return (
    <StyledMeetingRoomStatusPage>
      <AppLayout name={"회의실 현황"}>
        <div ref={scrollRef}>
          {components.components.map((v) => {
            return <>{v}</>;
          })}
        </div>
      </AppLayout>
    </StyledMeetingRoomStatusPage>
  );
};

const StyledMeetingRoomStatusPage = styled.div`
  width: 100wh;
  height: 100%;
`;

export default MeetingRoomStatusPage;
