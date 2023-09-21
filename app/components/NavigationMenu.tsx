import { DownOutlined, GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Drawer, Dropdown, Input, Menu, MenuProps, Row, Space, Typography } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import axios from "axios";
import { useState } from "react";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import { Form } from "@remix-run/react";
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

const menuList: MenuItem[] = [{
    key: 'photography',
    label: 'Photography',
    children: [
        {
            key: '1',
            label: 'item',
        },
    ]
},
{
    key: 'collections',
    label: 'Collections',
    children: [
        {
            key: '1',
            label: 'item',
        },
    ]
}];

function getDrawerItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const AppNavigation = {
    MainMenu: () => <Row justify={'center'} gutter={[20, 0]}>{menuList.map(item => <Col key={'menu-' + item.key} ><Dropdown menu={{ items: item.children }}>
        <a className="header-nav-item-text" onClick={(e) => e.preventDefault()}>
            <Space size={'small'} direction="horizontal">
                <span>{item.label}</span>
                <DownOutlined />
            </Space>
        </a>
    </Dropdown></Col>
    )}</Row>,
    Drawer: () => {
        const [openDrawer, setDrawerState] = useState(false);
        const [openKeys, setOpenKeys] = useState(['sub1']);
        const rootSubmenuKeys = menuList.reduce((acc, item) => {
            acc.push(item.key);
            return acc;
        }, [] as string[])

        const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
            const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                setOpenKeys(keys);
            } else {
                setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
            }
        };

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
                <Menu
                    style={{ width: 295, margin: '0 -24px 20px' }}
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={menuList}
                />
                <Divider />
                <Space direction="vertical" size={"large"}>
                    <UserLogin />
                    <div style={menuArtisantStyle}>
                        <Space style={{ padding: 8 }} direction="vertical" size={'middle'}>
                            <Title level={3}>Artisan?</Title>
                            <Button>Signup</Button>
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