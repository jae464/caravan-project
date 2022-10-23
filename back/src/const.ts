export interface MeetingRoomState {
  floor: number;
  name: string;
  isTv: boolean;
  isProjector: boolean;
  isVideoConference: boolean;
  capacity: number;
}

export const meetingRooms: MeetingRoomState[] = [
  {
    floor: 15,
    name: '15C.07',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    floor: 15,
    name: '15C.01',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    floor: 15,
    name: '15C.03',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    floor: 15,
    name: '15C.04',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    floor: 15,
    name: '15C.06',
    isTv: false,
    isProjector: true,
    isVideoConference: false,
    capacity: 12,
  },
  {
    floor: 15,
    name: '15C.08',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    floor: 15,
    name: '15E.01',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    floor: 15,
    name: '15E.03',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    floor: 15,
    name: '15E.05',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
];