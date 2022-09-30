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
      <h1>예약 정보 입력</h1>
      <StyledReservationFormInput
        type="text"
        name="meetingRoom"
        id="meetingRoom"
        placeholder="회의실"
        onChange={handleChange}
        value={values.meetingRoom}
      />
      <StyledReservationFormInput
        type="text"
        name="meetingDate"
        id="meetingDate"
        placeholder="회의 일자"
        onChange={handleChange}
        value={values.meetingDate}
      />
      <StyledReservationFormInput
        type="text"
        name="meetingTime"
        id="meetingTime"
        placeholder="회의 시간"
        onChange={handleChange}
        value={values.meetingTime}
      />
      <StyledReservationFormInput
        type="text"
        name="attendees"
        id="attendees"
        placeholder="참석자"
        onChange={handleChange}
        value={values.attendees}
      />
      <div>
        <StyledReservationFormButton id="reservation" onClick={handleSubmit}>
          예약
        </StyledReservationFormButton>
        <StyledReservationFormButton id="cancel">
          취소
        </StyledReservationFormButton>
      </div>
    </StyledReservationForm>
  );
};

const StyledReservationFormInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledReservationFormButton = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const StyledReservationForm = styled.div`
  display: inline-block;
  width: 450px;
  margin: 0 auto;
`;

export default ReservationForm;
