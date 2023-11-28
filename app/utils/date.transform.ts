import dayjs from "dayjs";

const DateFormatter = {
    short: (date: Date | string) => dayjs(date).format('MMM DD, YYYY'),
    time: (date: Date | string) => dayjs(date).format('hh:mm A')
}

export { DateFormatter };