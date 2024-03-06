import { NumberFormatter } from "@mantine/core";
import COMMON_DATA from "~/data/common.data";

function Currency({ value }: { value?: number }) {
    return <NumberFormatter prefix={COMMON_DATA.currency} value={Math.ceil(value || 0)} thousandSeparator />;
}

export default Currency;