import { DownOutlined, GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Menu,
  MenuProps,
  Popover,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import axios from "axios";
import { Suspense, useState } from "react";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import {
  Await,
  Form,
  Link,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { HeaderNavListItem, RootLoaderData } from "~/types";
import Routes from "~/routes.data";
const { Title } = Typography;

const menuArtisantStyle: React.CSSProperties = {
  borderRadius: "3px",
  padding: "20px 20px",
  background: "url(/assets/user-menu-bg.jpg) top",
  backgroundSize: "cover",
};

type MenuItem = {
  key: string;
  label: string;
  children?: MenuItem[];
};

const AppNavigation = {
  MainMenu: () => {
    const data = useLoaderData<RootLoaderData>();

    function dropdownContent(navitem: HeaderNavListItem) {
      return (
        <div style={{ margin: "-20px -24px" }}>
          <div style={{ padding: "40px" }}>
            <Space direction="vertical">
              <Typography.Title level={5}>
                {" "}
                <Link to={Routes.Services.replace(":id", navitem.id)}>
                  Browse all {navitem.name}
                </Link>
              </Typography.Title>
              {navitem.children?.map((menuItem) => (
                <div key={menuItem.name}>
                  <Typography.Title level={5}>
                    {menuItem.name}
                  </Typography.Title>
                  <Space direction="vertical">
                    {menuItem.list.map((item) => (
                      <Link key={item.id} to={item.path}>
                        <Typography.Text>{item.name}</Typography.Text>
                      </Link>
                    ))}
                    {!menuItem.list.length && <Typography.Text type="secondary">Sorry, no results found.</Typography.Text>}
                  </Space>
                </div>
              ))}
            </Space>
          </div>
        </div>
      );
    }

    return (
      <Suspense fallback={<Skeleton active />}>
        <Await resolve={data.pages}>
          {(navList) => (
            <Row justify={"center"} gutter={[20, 0]}>
              {navList.map((item) => (
                <Col key={"menu-" + item.id} style={{ cursor: "pointer" }}>
                  <Popover content={dropdownContent(item)} placement="bottom">
                    <Space
                      className="header-nav-item-text"
                      size={"small"}
                      direction="horizontal"
                    >
                      <span>{item.name}</span>
                      <DownOutlined style={{ fontSize: "10px" }} />
                    </Space>
                  </Popover>
                </Col>
              ))}
            </Row>
          )}
        </Await>
      </Suspense>
    );
  },
  Drawer: () => {
    const data = useLoaderData<RootLoaderData>();
    const navigate = useNavigate();
    const [openDrawer, setDrawerState] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    };

    function navigateToPage(event: any) {
      navigate(event?.key);
      toggleDrawer();
    }

    function toggleDrawer() {
      setDrawerState(!openDrawer);
    }

    return (
      <>
        <MenuOutlined onClick={() => toggleDrawer()} />
        <Drawer
          placement="left"
          width={300}
          title="Browse"
          onClose={() => toggleDrawer()}
          open={openDrawer}
        >
          <Suspense fallback={<Skeleton active />}>
            <Await resolve={data.pages}>
              {(navList) => (
                <Menu
                  style={{ width: 295, margin: "0 -24px 20px" }}
                  mode="inline"
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  onClick={navigateToPage}
                  items={navList.map(item => ({
                    key: item.id,
                    label: item.name,
                    children: item.children.map((child, i) => ({
                      key: 'child' + i,
                      label: child.name,
                      type: 'group',
                      children: [{
                        key: Routes.Services.replace(":id", item.id),
                        label: 'Browse all ',
                      }].concat(child.list.map(x => ({ key: x.path, label: x.name, })))
                    })),
                  }))}
                />
              )}
            </Await>
          </Suspense>
          <Divider />
          <Space direction="vertical" size={"large"}>
            <UserLogin onSuccess={() => toggleDrawer()} />
            <div style={menuArtisantStyle}>
              <Space
                style={{ padding: 8 }}
                direction="vertical"
                size={"middle"}
              >
                <Title level={3}>Artisan?</Title>
                <Link to="/partner/signup" onClick={() => toggleDrawer()}>
                  <Button>Signup</Button>
                </Link>
              </Space>
            </div>
            <Menu
              style={{ width: 295, margin: "0 -24px" }}
              mode="inline"
              items={[
                {
                  key: "location",
                  icon: <GlobalOutlined />,
                  label: "Bangalore",
                  children: locationList,
                },
              ]}
            />
          </Space>
        </Drawer>
      </>
    );
  },
};

export default AppNavigation;
