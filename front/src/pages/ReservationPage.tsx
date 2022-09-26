import styled from "@emotion/styled";
import ReservationForm from "components/ReservationForm";
import AppLayout from "layouts/AppLayout";
import ChatBotLayout from "layouts/ChatBotLayout";

const ReservationPage = () => {
  return (
    <AppLayout>
      <ChatBotLayout />
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
