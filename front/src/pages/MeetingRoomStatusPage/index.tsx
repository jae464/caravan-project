import styled from "@emotion/styled";
import { getAllReservation } from "api/reservation";
import FloorDrawing from "components/FloorDrawing";
import ReservationButton from "components/ReservationButton";
import ChatBotText from "design/ChatBotText";
import useAutoScroll from "hooks/useAutoScroll";
import useComponentHooks from "hooks/useComponentAdd";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";
import ChatLayout from "layouts/ChatLayout";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Reservation } from "types/reservation";

const MeetingRoomStatusPage = () => {
  const { components, clearComponent, addComponent } = useComponentHooks([]);
  const [scrollRef, scrollToBottom] = useAutoScroll();
  const currentDate = moment().format("YYYY-MM-DD HHMM");
  const [reservationList, setReservationList] = useState<Reservation[] | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data: Reservation[] = await getAllReservation();
      console.log("data :", data);
      setReservationList(
        data.filter((e: Reservation) => {
          const startTime = e.startTime ?? 0;
          const endTime = e.endTime ?? 9999;
          const currentTime = Number(currentDate.split(" ")[1]);
          return (
            moment(e.meetingDate).format("YYYY-MM-DD") ===
              currentDate.split(" ")[0] &&
            startTime < currentTime &&
            endTime > currentTime
          );
        })
      );
    })();
  }, []);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    navigate("/reservation");
  };

  useEffect(() => {
    initComponents();
  }, [reservationList]);

  const initComponents = async () => {
    clearComponent();
    addComponent([
      <>
        <ChatBotLayout>
          <ChatBotText>{currentDate} 기준 회의실 현황입니다</ChatBotText>
        </ChatBotLayout>
        <ChatBotLayout>
          <div>
            <FloorDrawing reservationList={reservationList} />
            <div style={{ textAlign: "center" }}>
              <ReservationButton
                text="예약하기"
                handleOnClick={handleOnClick}
              />
            </div>
          </div>
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
