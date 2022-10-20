import { time_range } from "./consts"

export const getTimeFormat = (time: number) => {
    return time_range.filter(t => 
        t.value === time
    )[0].label
}
