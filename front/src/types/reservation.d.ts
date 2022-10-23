export interface Reservation {
  id?: number;
  userId?: number;
  roomId?: number;
  name?: string;
  meetingDate?: Date;
  startTime?: number;
  endTime?: number;
}
