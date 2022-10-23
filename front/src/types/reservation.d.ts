export interface Reservation {
  id?: number;
  userId?: number;
  meetingRoomId?: number;
  roomId?: number;
  name?: string;
  meetingDate?: Date;
  startTime?: number;
  endTime?: number;
  meetingRoom?: Room;
}
