import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Checkbox, Col, Row, Select, Typography } from "antd";
import { useState } from "react";
import { ServiceQuery } from "~/service/services.service";
import { db } from "~/utils/database";

type LoaderData = {
    profile: {
        id: string;
        fullName: string;
        mobileNumber: string;
        email: string;
        category: string;
        socialUrl: string;
        createdAt: Date;
    },
    services: {
        id: string;
        name: string;
        service: {
            id: string;
            name: string;
        }[];
    }[]
}

export async function loader(args: LoaderArgs): Promise<LoaderData | null> {
    const applicationId = args.params.id;

    const data = await db.memberRequest.findFirst({
        where: {
            id: applicationId
        }
    });

    const services = await ServiceQuery.getServicesByJob();

    if (data) {
        return { profile: data, services: services.map(x => ({ id: x.id, name: x.name, service: x.serviceGroup.map(i => i.serviceGroupItem).reduce((acc, i) => acc.concat(i), []).map(i => i.service) })) }
    }

    return null;
}



export default function () {
    const data = useLoaderData<LoaderData>();
    const [serviceList, setServiceList] = useState<{ id: string; name: string; }[]>([]);

    function setActiveGroup(id: string) {
        const list = data.services.find(x => x.id === id);
        setServiceList(list?.service || []);
    }

    return <div className="container">
        <Row>
            <Col span={24}>
                <Typography.Title>Welcome</Typography.Title>
                <Typography.Title level={5}>Hello {data.profile.fullName}, Please fill up the following details.</Typography.Title>
            </Col>
            <Col span={24}>
                <Select onChange={event => setActiveGroup(event.target.value)}>
                    <Select.Option>Select a category</Select.Option>
                    {data.services.map(item => <Select.Option key={item.id}>{item.name}</Select.Option>)}
                </Select>
                {serviceList.map(service => <Checkbox value={service.id} key={service.id}>{service.name}</Checkbox>)}
            </Col>
        </Row>
    </div>;

}