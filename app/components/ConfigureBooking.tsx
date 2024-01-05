import { CheckCircleFilled, WarningFilled } from "@ant-design/icons";
import { Form } from "@remix-run/react";
import { Alert, Button, Calendar, Card, Checkbox, Col, Divider, Radio, Row, Select, Tabs, TimePicker, Tooltip, Typography } from "antd";
const { Title } = Typography;
import { createRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { VendorServiceOption } from "~/types";

const timeFormat = 'hh a';

function ConfigureBooking(service: { vendorServiceGroupId: string, options: VendorServiceOption[] }) {
    const { control, getValues, handleSubmit, setValue, register } = useForm();
    const [serviceChecklist, setServiceChecklist] = useState<boolean[]>([]);
    const checkoutForm = useRef<any>(null);
    const checkoutFormInput = useRef<any>(null);
    const [minDuration, setMinDuration] = useState(1);

    useEffect(() => {
        const minDur = Math.max.apply(0, service.options.map(x => x.duration));
        setMinDuration(minDur);
        setServiceChecklist([false]);
    }, []);

    function setServiceOptionDate(date: Date) {
        setValue(`date`, date);
        setValue(`timeHour`, null);

        serviceChecklist[0] = false;
        setServiceChecklist([...serviceChecklist]);
    }

    function setServiceOptionTime(index: number, hour?: number) {
        setValue(`timeHour`, hour);

        serviceChecklist[index] = true;
        setServiceChecklist([...serviceChecklist]);
    }

    function setServiceOptionDuration(index: number, duration?: number) {
        setValue(`duration`, duration);

        serviceChecklist[index] = true;
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

    return <Card title="Configure Services">
        <Form method="post" onSubmit={handleSubmit(proceedToCheckout)} action="/cart/add">
            <input type="hidden" {...register(`vendorServiceGroupId`)} value={service.vendorServiceGroupId} />
            <Row gutter={[30, 30]}>
                <Col sm={24} md={12}>
                    {service.options.map((item, key) => <input key={item.id} type="hidden" {...register(`services.${key}.id`)} value={item.id} />)}
                    <input type="hidden" {...register(`date`)} />
                    <Title level={5}>Select date</Title>
                    <Calendar fullscreen={false} disabledDate={(e) => { return e.toDate() < (new Date()); }} headerRender={() => <></>} onSelect={r => setServiceOptionDate(r.toDate())} />
                </Col>
                <Col sm={24} md={12}>
                    <Title level={5}>Choose time slot</Title>
                    <div>
                        <TimePicker hourStep={1} format={timeFormat} onChange={r => setServiceOptionTime(0, r?.hour())} />
                    </div>

                    <Title level={5}>Duration of the service</Title>
                    <Select
                        onChange={(value) => setServiceOptionDuration(0, value)}
                        placeholder="Choose"
                        options={[
                            {
                                label: minDuration + ' hours',
                                value: minDuration,
                            }
                        ].concat(
                            new Array(24).fill(minDuration + 1).map((x, i) => ({
                                label: (x + i) + ' hours',
                                value: x + i
                            }))
                        )} />
                </Col>
            </Row>
            <Divider />
            <Row justify={'end'} align={'middle'} gutter={[20, 20]}>
                <Col>
                    {serviceChecklist.includes(false) ? <Alert message="Please complete the above step to proceed." type="warning" showIcon /> : ''}
                </Col>
                <Col>
                    <Button disabled={serviceChecklist.includes(false)} type="primary" htmlType="submit">Continue Booking</Button>
                </Col>
            </Row>
        </Form>
        <div className="hidden">
            <Form ref={checkoutForm} method="post" action="/cart/add">
                <input name="cart" ref={checkoutFormInput} />
            </Form>
        </div>
    </Card>
}

export default ConfigureBooking;