import styled from "styled-components";
import { reservationRegister } from "api/form";
import useForm from "hooks/useForm";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { reservationAtom } from "recoil/reservation/atom";
import moment from 'moment';
import { time_range } from "utils/consts";
import { addReservation } from "api/reservation";
import { userAtom } from "recoil/user/atom";
import useComponentHooks from "hooks/useComponentAdd";
import ChatBotLayout from "layouts/ChatBotLayout";
import ChatBotText from "design/ChatBotText";
import ReservationInfoForm from "components/ReservationInfoForm";

const ReservationForm = () => {
  const user = useRecoilValue(userAtom);
  const [reservation, setReservation] = useRecoilState(reservationAtom);
  const {addComponent} = useComponentHooks([]);
  const resetReservation = useResetRecoilState(reservationAtom);

  const [values, errors, handleChange, handleSubmit] = useForm({
    initialValues: {
      meetingRoom: "",
      meetingDate: "",
      meetingTime: "",
      attendees: "",
    },
    validate: (values: any) => {},
    onSubmit: (values: any) => {
      console.log(reservation);
      if(!reservation.name) {
        alert('회의명을 입력해주세요.')
        return
      }
      addReservation({
        userId: user.id,
        roomId: reservation.roomId,
        name: reservation.name,
        meetingDate: reservation.meetingDate,
        startTime: reservation.startTime,
        endTime: reservation.endTime
      });
      addComponent([
        <ChatBotLayout><ChatBotText>예약이 완료되었습니다.</ChatBotText></ChatBotLayout>,
        <ChatBotLayout><ReservationInfoForm reservation={reservation}/></ChatBotLayout>
      ])

      setReservation(prev => ({
        ...prev,
        done: true,
      }));

    },
    onCancel: () => {
      alert("예약이 취소되었습니다.");
    },
  });

  const onChangeMeetingName = (e: any) => {
    setReservation(prev => ({
      ...prev,
      name: e.target.value,
    }));
  }
  return (
    <StyledReservationForm>
      <StyledReservationInputContainer>
        <span>회의실</span>
        <StyledReservationFormInput
          type="text"
          name="meetingRoom"
          id="meetingRoom"
          disabled
          placeholder={reservation.roomId?.toString()}
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
          onChange={onChangeMeetingName}
          // value={values.meetingDate}
        />
      </StyledReservationInputContainer>

      <StyledReservationInputContainer>
        <span>회의일자</span>
        <StyledReservationFormInput
          type="text"
          name="meetingDate"
          id="meetingDate"
          placeholder={moment(reservation.meetingDate).format("YYYY년 MM월 DD일")}
          disabled
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
          placeholder={[time_range.find(time => time.value === reservation.startTime)?.label,
            time_range.find(time => time.value === reservation.endTime)?.label]
            .join(' ~ ')}
          disabled
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
        <StyledReservationFormButton id="reservation">
          참석자 추가
        </StyledReservationFormButton>
        <StyledReservationFormButton id="cancel">
          내부서
        </StyledReservationFormButton>
      </AttendeeButtonContainer>

      <ReservationButtonContainer>
        <ReservationButton onClick={handleSubmit} clickable={!reservation.done}>
          예약
        </ReservationButton>
        <ReservationButton onClick={()=>console.log('취소')} clickable={!reservation.done}>
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

const ReservationButton = styled.button<{clickable: boolean}>`
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
  pointer-events: ${(props) => props.clickable ? 'auto' : 'none'}

`
export default ReservationForm;
