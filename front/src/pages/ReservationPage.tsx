import styled from "@emotion/styled";
import ReservationForm from "components/ReservationForm";
import AppLayout from "layouts/AppLayout";

const ReservationPage = () => {
  return (
    <AppLayout>
      <StyledReservationPage>
        <ReservationForm />
      </StyledReservationPage>
    </AppLayout>
  );
};

const StyledReservationPage = styled.div`
  margin: 0 auto;
  height: 650px;
  text-align: center;
`;

export default ReservationPage;
