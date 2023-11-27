import { BookingStatus } from "@prisma/client";

const StatusMarker = new Map();

StatusMarker.set(BookingStatus.PENDING, 'warning');
StatusMarker.set(BookingStatus.ACCEPTED, '#87d068');
StatusMarker.set(BookingStatus.IN_PROGRESS, 'cyan');
StatusMarker.set(BookingStatus.COMPLETED, '#108ee9');
StatusMarker.set(BookingStatus.CANCELLED, '#f50');
StatusMarker.set(BookingStatus.REJECTED, '#f50');


export { StatusMarker };
