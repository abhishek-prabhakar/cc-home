import { CheckCircleFilled, WarningFilled } from "@ant-design/icons";
import { Alert, Button, Card, Divider, Grid, Select, Title } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { Form, Link } from "@remix-run/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { createRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Routes from "~/routes.data";
import { VendorServiceOption } from "~/types";

const timeFormat = 'hh a';

function ConfigureBooking(service: { minHour: number, vendorServiceGroupId: string, options: VendorServiceOption[] }) {
    const { control, getValues, handleSubmit, setValue, register } = useForm();
    const [serviceChecklist, setServiceChecklist] = useState<boolean[]>([false, false, false]);
    const checkoutForm = useRef<any>(null);
    const checkoutFormInput = useRef<any>(null);
    const [minDuration, setMinDuration] = useState(1);

    useEffect(() => {
        // const minDur = Math.max.apply(0, service.options.map(x => x.duration));
        setMinDuration(service.minHour);
        setServiceOptionDuration(0);
        setServiceChecklist([false, false, false]);
    }, [service]);

    function setServiceOptionDate(date: Date) {
        setValue(`date`, date);
        setValue(`timeHour`, null);

        serviceChecklist[0] = true;
        setServiceChecklist([...serviceChecklist]);
    }

    function setServiceOptionTime(index: number, hour?: number) {
        setValue(`timeHour`, hour);

        serviceChecklist[index] = !!hour;
        setServiceChecklist([...serviceChecklist]);
    }

    function setServiceOptionDuration(index: number, duration?: number) {
        setValue(`duration`, duration);

        serviceChecklist[index] = !!duration;
        setServiceChecklist([...serviceChecklist]);
    }

    function proceedToCheckout(params: any) {
        if (checkoutForm.current) {
            const validParams: any[] = params?.services.filter((x: any) => service.options.find(i => i.id === x.id));
            if (validParams.length) {
                checkoutFormInput.current.value = JSON.stringify({
                    ...params,
                    services: validParams
                }
                );
                checkoutForm.current.submit()
            } else {
                alert('Nothing to add')
            }
        }
    }

    return <Card withBorder title="Configure Services">
        <Form method="post" onSubmit={handleSubmit(proceedToCheckout)} action="/cart/add">
            <input type="hidden" {...register(`vendorServiceGroupId`)} value={service.vendorServiceGroupId} />
            <Grid gutter={30}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    {service.options.map((item, key) => <input key={item.id} type="hidden" {...register(`services.${key}.id`)} value={item.id} />)}
                    <input type="hidden" {...register(`date`)} />
                    <Title order={5}>Select date</Title>
                    { /*   <Calendar fullscreen={false} disabledDate={(e) => { return e.toDate() <= (new Date()); }} headerRender={() => <></>} onSelect={r => setServiceOptionDate(r.toDate())} /> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title order={5}>Choose time slot</Title>
                    <div>
                        {/* <TimePicker hourStep={1} format={timeFormat} onChange={r => setServiceOptionTime(1, r?.hour())} /> */}
                    </div>

                    <Title order={5}>Duration of the service</Title>
                    <Select
                        onChange={(value) => setServiceOptionDuration(2, parseInt(value || ''))}
                        placeholder="Choose"
                        data={[
                            {
                                label: minDuration + ' hours',
                                value: '' + minDuration,
                            }
                        ].concat(
                            new Array(24).fill(minDuration + 1).map((x, i) => ({
                                label: (x + i) + ' hours',
                                value: '' + x + i
                            }))
                        )} />
                </Grid.Col>
            </Grid>
            <Divider />
            <Grid justify={'end'} align={'middle'} gutter={20}>
                <Grid.Col>
                    {serviceChecklist.includes(false) ? <Alert title="Please complete the above step to proceed." c="yellow" icon={<IconInfoCircle />} /> : ''}
                </Grid.Col>
                <Grid.Col>
                    <Link to={Routes.get('Cart')}><Button variant="outline">View Cart</Button></Link>
                </Grid.Col>
                <Grid.Col>
                    <Button disabled={serviceChecklist.includes(false)} variant="filled" type="submit">Add to Cart</Button>
                </Grid.Col>
            </Grid>
        </Form>
        <div className="hidden">
            <Form ref={checkoutForm} method="post" action="/cart/add">
                <input type="hidden" name="redirectUrl" value={window.location.href} />
                <input name="cart" ref={checkoutFormInput} />
            </Form>
        </div>
    </Card>
}

export default ConfigureBooking;