import styled from "@emotion/styled";
import ReservationForm from "components/ReservationForm";

const ReservationPage = () => {
  return (
    <>
      <StyledReservationPage>
        <ReservationForm />
      </StyledReservationPage>
    </>
  );
};

const StyledReservationPage = styled.div`
  margin: 0 auto;
  height: 650px;
  text-align: center;
`;

export default ReservationPage;
