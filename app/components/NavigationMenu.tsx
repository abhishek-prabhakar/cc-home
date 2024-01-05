import { DownOutlined, GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Drawer, Dropdown, Input, Menu, MenuProps, Popover, Row, Space, Typography } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import axios from "axios";
import { useState } from "react";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import { Await, Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { RootLoaderData } from "~/types";
const { Title } = Typography;

const menuArtisantStyle: React.CSSProperties = {
    borderRadius: '3px',
    padding: '20px 20px', background: 'url(/assets/user-menu-bg.jpg) top', backgroundSize: 'cover'
}

type MenuItem = {
    key: string,
    label: string,
    children?: MenuItem[]
}

function getPages(list: { keyName: string, name: string }[]) {
    const menuList: MenuItem[] = [{
        key: 'photography',
        label: 'Photography',
        children: [
            {
                key: 'pre-wedding',
                label: 'Pre Wedding',
            },
            {
                key: 'wedding',
                label: 'Wedding',
            },
        ]
    },
    {
        key: 'services',
        label: 'Collections',
        children: list.map(x => ({
            key: x.keyName,
            label: x.name
        }))
    }];

    return menuList;
}


const AppNavigation = {
    MainMenu: () => {
        const data = useLoaderData<RootLoaderData>();

        function dropdownContent(item: MenuItem) {

            return <div style={{ margin: '-20px -24px' }}>
                <Row gutter={[40, 40]}>
                    <Col span={8}>
                        <img src="http://1.bp.blogspot.com/-xWlHs4y6IVk/U3lLsj5LXQI/AAAAAAAADS8/8Fx0eclSadg/s1600/c96f3c66ab2f483ca073adfb47dc8b44.jpg" style={{ borderRadius: '4px' }} width={'100%'} />
                    </Col>
                    <Col span={16}>
                        <div style={{ padding: '40px 0' }}>
                            <Space direction="vertical">
                                <Typography.Text color="primary" strong>Popular</Typography.Text>
                                {item.children?.map(menuItem => <Link key={item.key + menuItem.key} to={`/${item.key}/${menuItem.key}`}><Typography.Text key={menuItem.key}>{menuItem.label}</Typography.Text></Link>)}
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
        }

        return <Await resolve={data.pages}>
            {pageData => <Row justify={'center'} gutter={[20, 0]}>{getPages(pageData).map(item => <Col key={'menu-' + item.key} >
                <Popover content={dropdownContent(item)} placement="bottom">
                    <Space className="header-nav-item-text" size={'small'} direction="horizontal">
                        <span>{item.label}</span>
                        <DownOutlined />
                    </Space>
                </Popover>
            </Col>
            )}</Row>}
        </Await>;
    },
    Drawer: () => {
        const data = useLoaderData<RootLoaderData>();
        const navigate = useNavigate();
        const [openDrawer, setDrawerState] = useState(false);
        const [openKeys, setOpenKeys] = useState(['sub1']);
        // const rootSubmenuKeys = menuList.reduce((acc, item) => {
        //     acc.push(item.key);
        //     return acc;
        // }, [] as string[]);
        const rootSubmenuKeys: string[] = [];

        const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
            const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                setOpenKeys(keys);
            } else {
                setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
            }
        };

        function navigateToPage(event: any) {
            const path = event?.keyPath.reverse().join('/');
            navigate(`/${path}`);
            toggleDrawer();
        }

        function toggleDrawer() {
            setDrawerState(!openDrawer);
        }

        return <>
            <MenuOutlined onClick={() => toggleDrawer()} />
            <Drawer placement="left"
                width={300}
                title="Browse"
                onClose={() => toggleDrawer()}
                open={openDrawer}>
                <Await resolve={data.pages}>
                    {pageData => <Menu
                        style={{ width: 295, margin: '0 -24px 20px' }}
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        onClick={navigateToPage}
                        items={getPages(pageData)}
                    />}
                </Await>
                <Divider />
                <Space direction="vertical" size={"large"}>
                    <UserLogin onSuccess={() => toggleDrawer()} />
                    <div style={menuArtisantStyle}>
                        <Space style={{ padding: 8 }} direction="vertical" size={'middle'}>
                            <Title level={3}>Artisan?</Title>
                            <Link to="/partner/signup" onClick={() => toggleDrawer()}><Button>Signup</Button></Link>
                        </Space>
                    </div>
                    <Menu
                        style={{ width: 295, margin: '0 -24px' }}
                        mode="inline"
                        items={[{ key: 'location', icon: <GlobalOutlined />, label: 'Bangalore', children: locationList }]}
                    />
                </Space>
            </Drawer>
        </>;
    }
}

export default AppNavigation;