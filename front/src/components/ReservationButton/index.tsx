import styled from "@emotion/styled";

interface ReservationButtonProps {
  text: string;
  handleOnClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const ReservationButton = ({ text, handleOnClick }: ReservationButtonProps) => {
  return (
    <StyledReservationButton onClick={handleOnClick}>
      {text}
    </StyledReservationButton>
  );
};

const StyledReservationButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  width: 250px;
  height: 75px;
  border-radius: 10px;
  border: none;
  background-color: #ffc2c3;
  color: #fff;
`;

export default ReservationButton;
