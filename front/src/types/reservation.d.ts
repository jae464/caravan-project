export interface Reservation {
    userId?: number;
    roomId?: number;
    name?: string;
    meetingDate?: Date;
    startTime?: number;
    endTime?: number;
}