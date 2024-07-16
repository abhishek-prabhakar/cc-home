import dayjs from "dayjs";

const DateFormatter = {
    short: (date: Date | string) => dayjs(date).format('MMM DD, YYYY'),
    time: (date: Date | string) => dayjs(date).format('hh:mm A'),
    timeHourTo12Hrs: (hour: number) => {
        const d = new Date();
        d.setHours(hour);
        d.setMinutes(0);
        return  dayjs(d).format('hh:mm A')
    }
}

export { DateFormatter };