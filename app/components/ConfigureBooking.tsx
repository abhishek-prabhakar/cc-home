import { CheckCircleFilled, WarningFilled } from "@ant-design/icons";
import { Form } from "@remix-run/react";
import { Alert, Button, Calendar, Card, Checkbox, Col, Divider, Radio, Row, Select, Tabs, TimePicker, Tooltip, Typography } from "antd";
const { Title } = Typography;
import { createRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { VendorServiceOption } from "~/types";

const timeFormat = 'hh';

function ConfigureBooking(service: { serviceGroupId: string, options: VendorServiceOption[] }) {
    const { control, getValues, handleSubmit, setValue, register } = useForm();
    const [serviceChecklist, setServiceChecklist] = useState<boolean[]>([]);
    const checkoutForm = useRef<any>(null);
    const checkoutFormInput = useRef<any>(null);
    const [isMobileView, setMobileVIew] = useState(false);
    const resize = () => {
        setMobileVIew(window.innerWidth < 500);
    };

    useEffect(() => {
        setMobileVIew(window.innerWidth < 500);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    });
    useEffect(() => {
        setServiceChecklist(service.options.map(r => false));
    }, []);

    const optionsWithDisabled = [
        { label: '6 AM', value: '6' },
        { label: '9 AM', value: '9' },
        { label: '12 PM', value: '12', disabled: true },
        { label: '3 PM', value: '15', },
        { label: '6 PM', value: '18', disabled: true },
        { label: '9 PM', value: '21', },
    ];

    function setServiceOptionDate(index: number, date: Date) {
        setValue(`service.${index}.date`, date);
        setValue(`service.${index}.time`, null);

        serviceChecklist[index] = false;
        setServiceChecklist([...serviceChecklist]);
    }

    function setServiceOptionTime(index: number, checked: boolean, value: string) {
        const v = getValues();
        let times: string = v.service[index].time;
        // let times: string[] = v.service[index].time || [];
        // // if (times.includes(value)) {
        // //     times = times.filter(x => x !== value);
        // // } else {
        // //     times.push(value);
        // // }
        setValue(`service.${index}.time`, times);

        serviceChecklist[index] = true;
        setServiceChecklist([...serviceChecklist]);
    }

    function proceedToCheckout(params: any) {
        if (checkoutForm.current) {
            checkoutFormInput.current.value = JSON.stringify(params);
            checkoutForm.current.submit()

        }
    }

    return <Card title="Configure Services">
        <Form method="post" onSubmit={handleSubmit(proceedToCheckout)} action="/cart/add">
            <input className="hidden" {...register(`serviceGroupId`)} value={service.serviceGroupId} />
            <Tabs
                tabPosition={isMobileView ? 'top' : 'left'}
                items={service.options.map((item, index) => {
                    return {
                        label: serviceChecklist[index] ? <span className="_success" ><CheckCircleFilled />{item.title}</span> : <Tooltip title="Date and time is required"><span className="_danger"><WarningFilled />{item.title}</span></Tooltip>,
                        key: item.id,
                        children: <Row gutter={[30, 30]}>
                            <Col sm={24} md={12}>
                                <input className="hidden" {...register(`service.${index}.vendorServiceId`)} value={item.id} />
                                <input className="hidden" {...register(`service.${index}.date`)} />
                                <Title level={5}>Select date</Title>
                                <Calendar fullscreen={false} disabledDate={(e) => { return e.toDate() < (new Date()); }} headerRender={() => <></>} onSelect={r => setServiceOptionDate(index, r.toDate())} />
                            </Col>
                            <Col sm={24} md={12}>
                                <Title level={5}>Choose time slot</Title>
                                {optionsWithDisabled.map(item => <div key={item.value} >
                                    <TimePicker hourStep={1} format={timeFormat} />
                                    {/* <Rad value={item.value} onChange={r => setServiceOptionTime(index, r.target.checked, item.value)} disabled={item.disabled}>{item.label}</Checkbox> */}
                                </div>)}
                                <hr />
                                <Title level={5}>Duration of the service</Title>
                                <Select
                                    {...register(`service.${index}.duration`)}
                                    placeholder="Choose"
                                    options={[
                                        {
                                            label: item.duration + ' hours',
                                            value: item.duration,
                                        },
                                        new Array(24 - item.duration).fill(item.duration).map((x, i) => ({
                                            label: (x + i + 1) + ' hours',
                                            value: x + i + 1
                                        }))
                                    ]} />
                            </Col>
                        </Row>,
                    };
                })}
            />
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