import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
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
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
    ]
},
{
    id: 'collections',
    label: 'Collections',
}];

export const AppNavigation: React.FC = () => <>{menuList.map(item => <Dropdown key={'menu-' + item.id} menu={{ items: item.children }}>
    <a onClick={(e) => e.preventDefault()}>
        <Space>
            {item.label}
            <DownOutlined />
        </Space>
    </a>
</Dropdown>
)}</>