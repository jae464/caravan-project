export interface MeetingRoomState {
  id: number;
  floor: number;
  name: string;
  isTv: boolean;
  isProjector: boolean;
  isVideoConference: boolean;
  capacity: number;
}

export const meetingRooms: MeetingRoomState[] = [
  {
    id: 1,
    floor: 15,
    name: '15C.07',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    id: 2,
    floor: 15,
    name: '15C.01',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    id: 3,
    floor: 15,
    name: '15C.03',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    id: 4,
    floor: 15,
    name: '15C.04',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 8,
  },
  {
    id: 5,
    floor: 15,
    name: '15C.06',
    isTv: false,
    isProjector: true,
    isVideoConference: false,
    capacity: 12,
  },
  {
    id: 6,
    floor: 15,
    name: '15C.08',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    id: 7,
    floor: 15,
    name: '15E.01',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    id: 8,
    floor: 15,
    name: '15E.03',
    isTv: true,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    id: 9,
    floor: 15,
    name: '15C.02',
    isTv: false,
    isProjector: false,
    isVideoConference: false,
    capacity: 6,
  },
  {
    id: 10,
    floor: 15,
    name: '15E.02',
    isTv: true,
    isProjector: true,
    isVideoConference: true,
    capacity: 10,
  },
];
