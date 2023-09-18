import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, MenuProps, Row, Space } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const menuList: {
    id: string,
    label: string,
    children?: ItemType<MenuItemType>[]
}[] = [{
    id: 'photography',
    label: 'Photography',
    children: [
        {
            key: '1',
            label: 'item',
        },
    ]
},
{
    id: 'collections',
    label: 'Collections',
    children: [
        {
            key: '1',
            label: 'item',
        },
    ]
}];

export const AppNavigation: React.FC = () => <Row justify={'center'} gutter={[20, 0]}>{menuList.map(item => <Col key={'menu-' + item.id} ><Dropdown menu={{ items: item.children }}>
    <a className="header-nav-item-text" onClick={(e) => e.preventDefault()}>
        <Space size={'small'} direction="horizontal">
            <span>{item.label}</span>
            <DownOutlined />
        </Space>
    </a>
</Dropdown></Col>
)}</Row>