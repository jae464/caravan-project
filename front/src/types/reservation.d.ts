export interface Reservation {
  id?: number;
  userId?: number;
  meetingRoomId?: number;
  name?: string;
  meetingDate?: Date;
  startTime?: number;
  endTime?: number;
}
