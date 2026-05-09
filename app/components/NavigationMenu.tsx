import { Suspense, useEffect, useState } from "react";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import {
  Await,
  Form,
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { HeaderNavListItem, RootLoaderData, User } from "~/types";
import Routes from "~/routes.data";
import {
  Accordion,
  Box,
  Button,
  Divider,
  Drawer,
  Flex,
  Grid,
  Menu,
  Modal,
  NavLink,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronDown, IconMenu, IconWorld } from "@tabler/icons-react";
import Skeleton from "./Skeleton";
import ComingSoonModal from "./ComingSoonModal";
import SearchInput from "./SearchInput";

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

function DropdownContent({ navitem }: { navitem: HeaderNavListItem }) {
  return (
    <Stack p={"sm"}>
      <Text>
        {" "}
        <Link to={Routes.get("Services", { id: navitem.id })}>
          Browse all {navitem.name}
        </Link>
      </Text>
      {navitem.children?.map((menuItem) => (
        <div key={menuItem.name}>
          <Stack gap={"xs"}>
            <Text c="dimmed">{menuItem.name}</Text>
            {menuItem.list.map((item) => (
              <Link key={item.id} to={item.path}>
                <Text size="sm" c="black">
                  {item.name}
                </Text>
              </Link>
            ))}
            {!menuItem.list.length && (
              <Text c="dimmed">Sorry, no results found.</Text>
            )}
          </Stack>
        </div>
      ))}
    </Stack>
  );
}

const AppNavigation = {
  MainMenu: () => {
    const data = useLoaderData<RootLoaderData>();

    return (
      <Suspense fallback={<Skeleton />}>
        <Await resolve={data.pages}>
          {(navList) => (
            <Flex justify={"center"} gap={0} py={"md"}>
              {navList?.map((item) => (
                <Box key={"menu-" + item.id} style={{ cursor: "pointer" }}>
                  {item.children?.length ? (
                    <Menu trigger="click-hover" shadow="md">
                      <Menu.Target>
                        <NavLink
                          fw={"bold"}
                          c={"dark"}
                          label={item.name}
                          style={{textWrap: 'nowrap'}}
                          rightSection={<IconChevronDown size={12} />}
                        />
                      </Menu.Target>
                      <Menu.Dropdown>
                        <DropdownContent navitem={item} />
                      </Menu.Dropdown>
                    </Menu>
                  ) : (
                    <Link to={Routes.get('Services',{id: item.id})}>
                      <NavLink fw={"bold"} c={"dark"} label={item.name} />
                    </Link>
                  )}
                </Box>
              ))}
              <Link to={Routes.get("Blog")}>
                <NavLink fw={"bold"} c={"dark"} label="Blog" />
              </Link>
            </Flex>
          )}
        </Await>
      </Suspense>
    );
  },
  Drawer: ({ user }: { user?: User | null }) => {
    const data = useLoaderData<RootLoaderData>();
    const location = useLocation();
    const [openDrawer, setDrawerState] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("Bangalore");
    const [showComingSoonDialog, setComingSoonDialog] = useState(false);

    useEffect(() => {
      toggleDrawer(false);
    }, [location.pathname]);

    function toggleDrawer(show = !openDrawer) {
      setDrawerState(show);
    }

    function handleLocationMenuClick(key: string) {
      const item = locationList.find((x) => x.key === key);
      if (item?.available) {
        setCurrentLocation(item.label);
      } else {
        setComingSoonDialog(true);
      }
    }

    return (
      <>
        <IconMenu onClick={() => toggleDrawer()} />
        <Drawer
          position="left"
          w={300}
          title=""
          onClose={() => toggleDrawer()}
          opened={openDrawer}
        >
          <SearchInput />
          <Space h={"xl"} />
          <Title order={5}>Browse</Title>
          <Suspense fallback={<Skeleton />}>
            <Await resolve={data.pages}>
              {(navList) => (
                <Accordion>
                  {navList.map((item) => (
                    <Accordion.Item key={item.id} value={item.id}>
                      <Accordion.Control>{item.name}</Accordion.Control>
                      <Accordion.Panel>
                        {item.children.map((child, i) => (
                          <Stack key={"child" + i}>
                            <Title order={5}>{child.name}</Title>
                            {[
                              {
                                id: item.id,
                                path: Routes.get("Services", { id: item.id }),
                                name: "Browse all ",
                              },
                            ]
                              .concat(child.list)
                              .map((menuItem) => (
                                <Link
                                  to={menuItem.path}
                                  onClick={() => toggleDrawer(false)}
                                  key={menuItem.id}
                                >
                                  <Text>{menuItem.name}</Text>
                                </Link>
                              ))}
                          </Stack>
                        ))}
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </Await>
          </Suspense>
          <Link to={Routes.get("Blog")} onClick={() => toggleDrawer(false)}>
            <NavLink c={"dark"} label="Blog" pl={"md"} />
          </Link>
          <Space h="xl" />
          {user?.id ? (
            <>
              <Link to={"/user/home"} onClick={() => toggleDrawer(false)}>
                <Button variant="white" fullWidth>
                  My Bookings
                </Button>
              </Link>
              <Link
                to={Routes.get("UserInbox")}
                onClick={() => toggleDrawer(false)}
              >
                <Button variant="white" fullWidth>
                  Messages
                </Button>
              </Link>
              <Link
                to={Routes.get("UserFavorites")}
                onClick={() => toggleDrawer(false)}
              >
                <Button variant="white" fullWidth>
                  Favorites
                </Button>
              </Link>
              <Link to="/logout" onClick={() => toggleDrawer(false)}>
                <Button size="sm" variant="subtle">
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <UserLogin
              onSuccess={() => toggleDrawer(false)}
              inlineMode={true}
            />
          )}
          <Stack gap={"lg"}>
            <div style={menuArtisantStyle}>
              <Stack style={{ padding: 8 }} gap={"md"}>
                <Title order={3}>Artisan?</Title>
                <Link to="/partner/signup" onClick={() => toggleDrawer()}>
                  <Button>Signup</Button>
                </Link>
              </Stack>
            </div>
            <Accordion>
              <Accordion.Item key={"location"} value="location">
                <Accordion.Control icon={<IconWorld />}>
                  Location
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    {locationList.map((item) => (
                      <Button
                        ta={"left"}
                        onClick={() => handleLocationMenuClick(item.key)}
                        key={item.key}
                        size="sm"
                        variant="subtle"
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Drawer>
        <Modal
          opened={showComingSoonDialog}
          onClose={() => setComingSoonDialog(false)}
          title=""
        >
          <ComingSoonModal />
        </Modal>
      </>
    );
  },
};

export default AppNavigation;
