import styled from "@emotion/styled";
import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Reservation } from "types/reservation";

interface FloorDrawingProps {
  reservationList: Reservation[] | null;
}

const FloorDrawing = ({ reservationList }: FloorDrawingProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.className.includes("15")) return;
  };

  useEffect(() => {
    reservationList?.map((e: Reservation) => {
      const { name } = e.meetingRoom;
      const target: NodeListOf<Element> = document.querySelectorAll(
        `[class*="${name}"]`
      );
      target.forEach((e: any) => {
        e.style.backgroundColor = "red";
      });
    });
  }, [reservationList]);

  return (
    <>
      <StyledFloorDrawing
        onClick={handleOnClick}
        onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
          const target = e.target as HTMLDivElement;
          if (!target.className.includes("15")) return;
        }}
      >
        <>
          <StyledFloorDrawingColumn className={"firstColumn"}>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: "transparent", border: "none" }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02"
              style={{
                borderBottom: "none",
              }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02"
              style={{
                borderBottom: "none",
                borderTop: "none",
              }}
            >
              15E.02
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15E.02"
              style={{
                borderTop: "none",
              }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: "transparent", border: "none" }}
            ></StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn className={"firstColumn"}>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: "transparent", border: "none" }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15E.01">
              15E.01
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: "transparent", border: "none" }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15E.03">
              15E.03
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              style={{ backgroundColor: "transparent", border: "none" }}
            ></StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn className={"firstColumn"}>
            <StyledFloorDrawingColumnItem
              className="15C.01"
              style={{
                marginBottom: "30px",
              }}
            >
              15C.01
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02"
              style={{ borderBottom: "none" }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02"
              style={{
                borderBottom: "none",
                borderTop: "none",
              }}
            >
              15C.02
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.02"
              style={{ borderTop: "none" }}
            ></StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem
              className="15C.03"
              style={{ marginTop: "30px" }}
            >
              15C.03
            </StyledFloorDrawingColumnItem>
          </StyledFloorDrawingColumn>
        </>
        <>
          <StyledFloorDrawingColumn
            className={"firstColumn"}
            style={{ gap: "15px" }}
          >
            <StyledFloorDrawingColumnItem className="15C.08">
              15C.08
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.07">
              15C.07
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.06">
              15C.06
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.05">
              15C.05
            </StyledFloorDrawingColumnItem>
            <StyledFloorDrawingColumnItem className="15C.04">
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
  height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`;

const StyledFloorDrawingColumn = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  justify-content: center;
`;

const StyledFloorDrawingColumnItem = styled.div`
  width: 230px;
  cursor: pointer;
  height: 150px;
  text-align: center;
  line-height: 150px;
  background-color: #d9d9d9;
  border: 1px solid black;
`;

export default FloorDrawing;
