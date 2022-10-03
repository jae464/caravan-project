import styled from "@emotion/styled";
import { reservationRegister } from "api/form";
import useForm from "hooks/useForm";

const ReservationForm = () => {
  const [values, errors, handleChange, handleSubmit] = useForm({
    initialValues: {
      meetingRoom: "",
      meetingDate: "",
      meetingTime: "",
      attendees: "",
    },
    validate: (values: any) => {},
    onSubmit: (values: any) => {
      reservationRegister(values);
    },
    onCancel: () => {
      alert("예약이 취소되었습니다.");
    },
  });

  return (
    <StyledReservationForm>
      <StyledReservationInputContainer>
        <span>회의실</span>
        <StyledReservationFormInput
          type="text"
          name="meetingRoom"
          id="meetingRoom"
          placeholder="회의실"
          onChange={handleChange}
          value={values.meetingRoom}
        />
      </StyledReservationInputContainer>

      <StyledReservationInputContainer>
        <span>회의명</span>
        <StyledReservationFormInput
          type="text"
          name="meetingName"
          id="meetingName"
          placeholder="회의명"
          onChange={handleChange}
          value={values.meetingDate}
        />
      </StyledReservationInputContainer>

      <StyledReservationInputContainer>
        <span>회의일자</span>
        <StyledReservationFormInput
          type="text"
          name="meetingDate"
          id="meetingDate"
          placeholder="회의 일자"
          onChange={handleChange}
          value={values.meetingTime}
        />  
      </StyledReservationInputContainer>
    
      <StyledReservationInputContainer>
        <span>회의시간</span>
        <StyledReservationFormInput
          type="text"
          name="meetingTime"
          id="meetingTime"
          placeholder="회의시간"
          onChange={handleChange}
          value={values.attendees}
        />
      </StyledReservationInputContainer>

      <StyledReservationInputContainer>
        <span>참석자</span>
        <StyledReservationFormInput
          type="text"
          name="attendees"
          id="attendees"
          placeholder="참석자"
          onChange={handleChange}
          value={values.attendees}
        />
      </StyledReservationInputContainer>

  
      <AttendeeButtonContainer>
        <StyledReservationFormButton id="reservation" onClick={handleSubmit}>
          참석자 추가
        </StyledReservationFormButton>
        <StyledReservationFormButton id="cancel">
          내부서
        </StyledReservationFormButton>
      </AttendeeButtonContainer>

      <ReservationButtonContainer>
        <ReservationButton>
          예약
        </ReservationButton>
        <ReservationButton>
          취소
        </ReservationButton>
      </ReservationButtonContainer>
      
    </StyledReservationForm>
  );
};
const StyledReservationInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  align-items: center;
  span {
    width: 6rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`
const StyledReservationFormInput = styled.input`
  display: block;
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
  background: transparent;
  margin-left: 2rem;
  padding: 0;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledReservationFormButton = styled.button`
  display: block;
  width: 6rem;
  height: 2rem;
  background: #ACACAC;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;

const StyledReservationForm = styled.div`
  display: inline-block;
  width: 450px;
  margin: 0 auto;
`;

const AttendeeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
`

const ReservationButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  // border: 1px solid black;
  margin: 2rem auto;
  justify-content: center;
`

const ReservationButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  background: #FFC3C3;
  color: white;
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`
export default ReservationForm;
