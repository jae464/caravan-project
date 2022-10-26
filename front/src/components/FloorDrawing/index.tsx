import styled from '@emotion/styled';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { reservationAtom } from 'recoil/reservation/atom';
import { Reservation } from 'types/reservation';
import { getRoomIdByRoomName } from 'utils/util';

interface FloorDrawingProps {
  reservationList: Reservation[] | null;
  isStatusPage: boolean | null;
}

const FloorDrawing = ({ reservationList, isStatusPage }: FloorDrawingProps) => {
  const [reservation, setReservation] = useRecoilState(reservationAtom);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.className.includes('15')) return;
    console.log(target.className.split(' ')[0]);
    const meetingRoomName = target.className.split(' ')[0];
    console.log(`id ${getRoomIdByRoomName(meetingRoomName)}`);
    setReservation(prev => ({
      ...prev,
      meetingRoomId: getRoomIdByRoomName(meetingRoomName),
    }));

    // 전에 클릭했던 회의실 색깔 바꾸기
    resetBackgroundColor();
    // 클릭 회의실 파란색으로 표시
    const selectedTarget: NodeListOf<Element> = document.querySelectorAll(
      `[class*='${meetingRoomName}']`
    );
    selectedTarget.forEach((v: any) => {
      v.style.backgroundColor = 'lightgrey';
    });
  };

  const resetBackgroundColor = () => {
    const target: NodeListOf<Element> = document.querySelectorAll('.m');
    target.forEach((v: any) => {
      if (v.style.backgroundColor === 'lightgrey') {
        // v.style.backgroundColor = '#d9d9d9';
        v.style.backgroundColor = '	#3CB371';
        v.style.pointerEvents = 'auto';
      }
    });
  };
  useEffect(() => {
    console.log('FloorDrawing');
    const allTarget: NodeListOf<Element> = document.querySelectorAll('.m');
    allTarget.forEach((v: any) => {
      // v.style.backgroundColor = '#d9d9d9';
      v.style.backgroundColor = '	#3CB371';
      v.style.color = 'white';
      isStatusPage
        ? (v.style.pointerEvents = 'none')
        : (v.style.pointerEvents = 'auto');
    });
    reservationList?.map((e: Reservation) => {
      console.log(e);
      const { name } = e.meetingRoom;

      const target: NodeListOf<Element> = document.querySelectorAll(
        `[class*='${name}']`
      );
      target.forEach((e: any) => {
        e.style.backgroundColor = '#DB4455';
        e.style.pointerEvents = 'none';
      });
    });
  }, [reservationList]);

  return (
    <>
      <StyledFloorDrawing
        onClick={handleOnClick}
        onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
          const target = e.target as HTMLDivElement;
          if (!target.className.includes('15')) return;
        }}
      >
        <>
          <StyledFloorDrawingColumn className={'firstColumn'}>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: 'transparent', border: 'none' }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02 m"
              style={{
                borderBottom: 'none',
              }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02 m"
              style={{
                borderBottom: 'none',
                borderTop: 'none',
              }}
            >
              15E.02
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02 m"
              style={{
                borderTop: 'none',
              }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: 'transparent', border: 'none' }}
            ></StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn className={'firstColumn'}>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: 'transparent', border: 'none' }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15E.01 m">
              15E.01
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: 'transparent', border: 'none' }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15E.03 m">
              15E.03
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: 'transparent', border: 'none' }}
            ></StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn className={'firstColumn'}>
            <StyledFloorDrawingColumnItem
              className="15C.01 m"
              style={{ borderBottom: 'none' }}
            >
              15C.01
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02 m"
              style={{ borderBottom: 'none' }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02 m"
              style={{
                borderBottom: 'none',
                borderTop: 'none',
              }}
            >
              15C.02
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02 m"
              style={{ borderTop: 'none', borderBottom: 'none' }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.03 m">
              15C.03
            </StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn className={'firstColumn'}>
            <StyledFloorDrawingColumnItem
              className="15C.08 m"
              style={{ borderBottom: 'none' }}
            >
              15C.08
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.07 m"
              style={{ borderBottom: 'none' }}
            >
              15C.07
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.06 m"
              style={{ borderBottom: 'none' }}
            >
              15C.06
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.05 m"
              style={{ borderBottom: 'none' }}
            >
              15C.05
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.04 m">
              15C.04
            </StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
      </StyledFloorDrawing>
    </>
  );
};

const StyledFloorDrawing = styled.div`
  margin: 0 auto;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-bottom: -6rem;
`;

const StyledFloorDrawingColumn = styled.div`
  display: flex;
  width: 75px;
  flex-direction: column;
  /* justify-content: center; */
`;

const StyledFloorDrawingColumnItem = styled.div`
  width: 75px;
  cursor: pointer;
  height: 100px;
  text-align: center;
  line-height: 150px;
  background-color: #d9d9d9;
  border: 1px solid white;
`;

export default FloorDrawing;
