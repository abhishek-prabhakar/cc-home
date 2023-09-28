import { GlobalOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Divider, Dropdown, Input, MenuProps, Row, Space, Typography } from "antd";

import { Form, Link, useLoaderData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import AppNavigation from "./NavigationMenu";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import { User } from "~/types";
const { Title } = Typography;

const logoStyle: React.CSSProperties = { fontSize: '18px', textTransform: 'uppercase', color: 'black' }
const userMenuStyle: React.CSSProperties = { width: '300px', background: 'white', borderRadius: '10px', boxShadow: '0 0 5px #e1e1e1', overflow: 'hidden' };
const menuArtisantStyle: React.CSSProperties = {
    padding: '20px 30px', background: 'url(/assets/user-menu-bg.jpg) top', backgroundSize: 'cover'
}


export function Header() {
    const navigation = useNavigation();
    const data = useLoaderData<User>();
    const [currentLocation, setCurrentLocation] = useState('Bangalore');

    function handleLocationMenuClick(data: any) {
        setCurrentLocation(locationList[data.key].label);
    }

    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '20px 0' }} >
            <div className="container">
                <Row justify={'space-between'}>
                    <Col span={0} md={7} lg={5}>
                        <Input placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                    </Col>
                    <Col sm={4} xs={4} md={0} lg={0} xl={0} xxl={0} span={0} >
                        <AppNavigation.Drawer />
                    </Col>
                    <Col flex={'auto'}>
                        <div className="header-brand">
                            <Link to="/" style={logoStyle}>CELEBRIA COLLECTIONS</Link>
                        </div>
                    </Col>
                    <Col span={4} md={7} lg={5}>
                        <Row gutter={[10, 0]} justify={'end'} align="middle">
                            <Col xs={0} sm={0} md={12}>
                                <Dropdown menu={{ items: locationList, onClick: handleLocationMenuClick, }} trigger={['click']}>
                                    <Space className="cursor-pointer">
                                        <GlobalOutlined />
                                        {currentLocation}
                                    </Space>
                                </Dropdown>
                            </Col>
                            <Col xs={0} sm={0} md={12}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Dropdown dropdownRender={() => (
                                        <div style={userMenuStyle}>
                                            <Space style={{ padding: '12px' }}>
                                                {data?.id ?
                                                    <div>
                                                        <Title level={5}>Hej!</Title>
                                                        <Link to={'/user/home'}>My Bookings</Link>
                                                        <Button href="/logout" >Logout</Button>
                                                    </div>
                                                    : <UserLogin />}
                                            </Space>
                                            <Divider style={{ margin: 0 }} />
                                            <div style={menuArtisantStyle}>
                                                <Space style={{ padding: 8 }} direction="vertical" size={'middle'}>
                                                    <Title level={3}>Artisan?</Title>
                                                    <Button>Signup</Button>
                                                </Space>
                                            </div>
                                        </div>
                                    )}
                                    >
                                        <Button>My Account</Button>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <Row>
            <Col span={0} md={24} style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '0px 40px' }} >
                <Row justify={'center'}>
                    <Col>
                        <AppNavigation.MainMenu />
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
}