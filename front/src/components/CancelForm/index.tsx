import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import { getAllReservation, removeReservation } from 'api/reservation';
import { useNavigate } from 'react-router';

import useComponentHooks from 'hooks/useComponentAdd';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatBotText from 'design/ChatBotText';
import StatusItem from 'components/StatusItem';
import { Reservation } from 'types/reservation';
import useReservationListHooks from 'hooks/useReservationList';
import { userAtom } from 'recoil/user/atom';
import { useRecoilState } from 'recoil';

type Props = {
  id: number;
};

const CancelForm = ({ id }: Props): JSX.Element => {
  const { reservationList, setReservationList, addReservation } =
    useReservationListHooks([]);
  const { components, setComponent, addComponent } = useComponentHooks([]);
  const [reservList, setReservList] = useState<Reservation[]>([]);
  const [userState, setUserState] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const setItemList = async () => {
    // db에 저장된 data 가져와야함
    const reservList = await getAllReservation(userState.id!);
    setReservationList(reservList);
    navigate('/reservationStatus');
  };

  useEffect(() => {
    setReservationList(reservationList);
  }, [reservationList]);

  const onClickY = async () => {
    console.log(id);
    await removeReservation(id);
    setItemList();
    addComponent([
      <ChatBotLayout>
        <ChatBotText>해당 회의실 예약이 취소되었습니다</ChatBotText>
      </ChatBotLayout>,
    ]);
  };

  const onClickN = () => {
    setItemList();
    // if (reservationList?.length == 0) {
    //     addComponent([
    //         <ChatBotLayout>
    //             <ChatBotText>
    //                 예약 정보가 없습니다.
    //             </ChatBotText>
    //         </ChatBotLayout>
    //     ])
    // }
    // else{
    //     addComponent([
    //         <ChatBotLayout>
    //             <ChatBotText>
    //                 예약 상세정보를 확인하고자 할 경우 목록 선택하고, 변경 or 취소를 원하는 경우 체크박스 선택 후 버튼을 눌러주세요. (변경은 1개만 선택가능합니다.)
    //             </ChatBotText>
    //         </ChatBotLayout>,
    //         <ChatBotLayout>
    //             <TitleText>예약 현황</TitleText>
    //             <ItemContainer>
    //                 {reservationList!.map( m => {
    //                     return (<StatusItem info={m}/>)
    //                 })}
    //             </ItemContainer>
    //         </ChatBotLayout>
    //     ])
    // }
  };
  return (
    <>
      <Container>
        <ChatBotText>해당 회의실 예약을 취소하시겠습니까?</ChatBotText>
        <ButtonContainer>
          <CancelButton onClick={onClickY}>YES</CancelButton>
          <CancelButton onClick={onClickN}>NO</CancelButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // border: 1px solid black;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: auto;
  // background: #0E0E0;
  // border: 1px solid black;
  justify-content: space-around;
  // bottom: 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: colums;
  justify-content: space-around;
`;

const TitleText = styled.h3`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 5px;
  color: #8a8a8a;
`;

const CancelButton = styled.button`
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  outline: none;
  height: 2rem;
  width: 5rem;
  color: white;

  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  margin: 0.5rem;
  background: #ffc3c3;

  border-radius: 5px;
  cursor: pointer;
  // &:active {
  //     backgroud: #fd8f9e;
  // }
  &:hover {
    background-color: #fd8f9e;
  }
`;
export default CancelForm;
