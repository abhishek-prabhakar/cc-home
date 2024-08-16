import { Badge, Group, NumberFormatter, Stack, Text } from "@mantine/core";
import { DiscountType } from "@prisma/client";
import COMMON_DATA from "~/data/common.data";

function FormattedValue({value}:{value: number}){
    return  <NumberFormatter prefix={COMMON_DATA.currency} value={Math.ceil(value || 0)} thousandSeparator />
}

function discountedValue(value:number, discount: number, type:DiscountType){
    switch(type){
        case DiscountType.FLAT: return value - discount; break;
        case DiscountType.PERCENTAGE: return value - (value*discount/100);  break;
        default: return value;
    }
}

function Currency({ value, discountType, discountValue }: { value?: number, discountType?: DiscountType, discountValue?: number }) {
    if(discountType && value && discountValue){
        return <Stack gap={0}>
            <Group>
                <Text size="sm" td="line-through"><FormattedValue value={Math.ceil(value || 0)} /></Text>
                <Badge color="red" size="xs">{discountValue}{discountType === DiscountType.PERCENTAGE?'%':''} OFF</Badge>
            </Group>
             <FormattedValue value={discountedValue(value, discountValue, discountType)} />
        </Stack>
    }

    return <FormattedValue value={Math.ceil(value || 0)} />;
}

export default Currency;