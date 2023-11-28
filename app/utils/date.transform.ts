import dayjs from "dayjs";

const DateFormatter = {
    short: (date: Date | string) => dayjs(date).format('MMM DD, YYYY')
}

export { DateFormatter };