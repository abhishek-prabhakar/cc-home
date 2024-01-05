import { BookingStatus, FareMode } from "@prisma/client";

const StatusMarker = new Map<BookingStatus, string>();

StatusMarker.set(BookingStatus.PENDING, 'warning');
StatusMarker.set(BookingStatus.ACCEPTED, '#87d068');
StatusMarker.set(BookingStatus.IN_PROGRESS, 'cyan');
StatusMarker.set(BookingStatus.COMPLETED, '#108ee9');
StatusMarker.set(BookingStatus.CANCELLED, '#f50');
StatusMarker.set(BookingStatus.REJECTED, '#f50');


const FareModeLabel = new Map<FareMode, string>();
FareModeLabel.set(FareMode.FLAT, 'Flat Fee');
FareModeLabel.set(FareMode.HOURLY, 'Hourly');

export { StatusMarker, FareModeLabel };
