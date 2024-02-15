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
import { Accordion, Box, Button, Divider, Drawer, Flex, Grid, Menu, Stack, Text, Title } from "@mantine/core";
import { IconChevronDown, IconMenu, IconWorld } from "@tabler/icons-react";
import Skeleton from "./Skeleton";

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
      return <Stack p={'sm'}>
        <Text>
          {" "}
          <Link to={Routes.Services.replace(":id", navitem.id)}>
            Browse all {navitem.name}
          </Link>
        </Text>
        {navitem.children?.map((menuItem) => (
          <div key={menuItem.name}>
            <Stack gap={'xs'}>
              <Text c="dimmed">
                {menuItem.name}
              </Text>
              {menuItem.list.map((item) => (
                <Link key={item.id} to={item.path}>
                  <Text size="sm" c="black">{item.name}</Text>
                </Link>
              ))}
              {!menuItem.list.length && <Text c="dimmed">Sorry, no results found.</Text>}
            </Stack>
          </div>
        ))}
      </Stack>;
    }

    return (
      <Suspense fallback={<Skeleton />}>
        <Await resolve={data.pages}>
          {(navList) => (
            <Flex justify={"center"} gap={'sm'} py={'md'}>
              {navList.map((item) => (
                <Box key={"menu-" + item.id} style={{ cursor: "pointer" }}>
                  <Menu trigger="click-hover" shadow="md" >
                    <Menu.Target>
                      <Flex
                        align={'center'}
                        className="header-nav-item-text"
                        gap={'xs'}
                      >
                        <span>{item.name}</span>
                        <IconChevronDown style={{ fontSize: "8px" }} />
                      </Flex>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {dropdownContent(item)}
                    </Menu.Dropdown>
                  </Menu>
                </Box>
              ))}
            </Flex>
          )}
        </Await>
      </Suspense>
    );
  },
  Drawer: () => {
    const data = useLoaderData<RootLoaderData>();
    const navigate = useNavigate();
    const [openDrawer, setDrawerState] = useState(false);


    function navigateToPage() {
      toggleDrawer();
    }

    function toggleDrawer() {
      setDrawerState(!openDrawer);
    }

    return (
      <>
        <IconMenu onClick={() => toggleDrawer()} />
        <Drawer
          position="left"
          w={300}
          title="Browse"
          onClose={() => toggleDrawer()}
          opened={openDrawer}
        >
          <Suspense fallback={<Skeleton />}>
            <Await resolve={data.pages}>
              {(navList) => (
                <Accordion>

                  {navList.map(item => <Accordion.Item key={item.id} value={item.id}>
                    <Accordion.Control>{item.name}</Accordion.Control>
                    <Accordion.Panel>
                      {item.children.map((child, i) => <Stack key={'child' + i}>
                        <Title order={5}>{child.name}</Title>
                        {[{
                          id: item.id,
                          path: Routes.Services.replace(":id", item.id),
                          name: 'Browse all ',
                        }].concat(child.list)
                          .map(menuItem => <Link to={menuItem.path} onClick={() => navigateToPage()}><Text key={menuItem.id}>{menuItem.name}</Text></Link>)
                        }
                      </Stack>)
                      }
                    </Accordion.Panel>
                  </Accordion.Item>)}
                </Accordion>
              )}
            </Await>
          </Suspense>
          <Stack gap={'lg'}>
            <UserLogin onSuccess={() => toggleDrawer()} />
            <div style={menuArtisantStyle}>
              <Stack
                style={{ padding: 8 }}
                gap={'md'}
              >
                <Title order={3}>Artisan?</Title>
                <Link to="/partner/signup" onClick={() => toggleDrawer()}>
                  <Button>Signup</Button>
                </Link>
              </Stack>
            </div>
            <Accordion>
              <Accordion.Item key={'location'} value="location">
                <Accordion.Control icon={<IconWorld />}>Location</Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    {locationList.map(item => <Text key={item.key}>{item.label}</Text>)}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Drawer>
      </>
    );
  },
};

export default AppNavigation;
