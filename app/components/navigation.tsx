import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Dropdown, Input, Menu, MenuProps, Row, Space, Typography } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import { useState } from "react";
const { Title } = Typography;

const menuArtisantStyle: React.CSSProperties = {
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
                    style={{ width: 250, marginBottom: '40px' }}
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={menuList}
                />
                <Space direction="vertical" size={"large"}>
                    <div>
                        <Title level={5}>Manage your booking</Title>
                        <Row justify={'end'} gutter={[10, 10]}>
                            <Col span={24}><Input prefix="+91" placeholder="Enter your phone number." /></Col>
                            <Col><Button type="primary">Login</Button></Col>
                        </Row>
                    </div>
                    <div style={menuArtisantStyle}>
                        <Space style={{ padding: 8 }} direction="vertical" size={'middle'}>
                            <Title level={3}>Artisant?</Title>
                            <Button>Signup</Button>
                        </Space>
                    </div>
                </Space>
            </Drawer>
        </>;
    }
}

export default AppNavigation;