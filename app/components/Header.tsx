import { Link, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import AppNavigation from "./NavigationMenu";
import { locationList } from "~/data/locations.data";
import UserLogin from "./UserLogin";
import { User } from "~/types";
import { useDispatch } from "react-redux";
import { setUser } from "~/store/user.store";
import { ActionIcon, Box, Button, Container, Divider, Flex, Grid, Group, Menu, Popover, Stack, Title } from "@mantine/core";
import { IconShoppingCart, IconWorld } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

const logoStyle: React.CSSProperties = { fontSize: '18px', textTransform: 'uppercase', color: 'black' }
const userMenuStyle: React.CSSProperties = { width: '300px', background: 'white', borderRadius: '10px', boxShadow: '0 0 5px #e1e1e1', overflow: 'hidden' };
const menuArtisantStyle: React.CSSProperties = {
    padding: '20px 30px', background: 'url(/assets/user-menu-bg.jpg) top', backgroundSize: 'cover'
}


export function Header({ user }: { user?: User | null }) {
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = useState('Bangalore');
    const dispatch = useDispatch();
    const [opened, { close, open }] = useDisclosure(false);

    useEffect(() => {
        dispatch(setUser(user?.id));
    }, [user]);

    function handleLocationMenuClick(data: any) {
        setCurrentLocation(locationList[data.key].label);
    }

    return <>
        <div style={{ borderBottom: '1px solid var(--ui-color-black)', padding: '20px 0' }} >
            <Container>
                <Grid justify={'space-between'} align="center" gutter={0}>
                    <Grid.Col span={{ base: 0, md: 4, lg: 3 }} visibleFrom="md">
                        <Menu>
                            <Menu.Target>
                                <Flex className="cursor-pointer" gap={'sm'} align={'center'}>
                                    <IconWorld />
                                    {currentLocation}
                                </Flex>
                            </Menu.Target>
                            <Menu.Dropdown>
                                {locationList.map(item => <Menu.Item key={item.key} onClick={handleLocationMenuClick}>{item.label}</Menu.Item>)}
                            </Menu.Dropdown>
                        </Menu >
                    </Grid.Col>
                    <Grid.Col span={{ base: 2, md: 0, lg: 0, xl: 0 }} hiddenFrom="md" >
                        <AppNavigation.Drawer />
                    </Grid.Col>
                    <Grid.Col flex={'auto'}>
                        <div className="header-brand">
                            <Link to="/" style={logoStyle}><img src="/assets/brand-logo-1.png" width={'150px'} /></Link>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 2, md: 4, lg: 3 }}>
                        <Flex gap={20} justify={'end'} align="center">
                            <Link to="/cart/checkout">
                                <ActionIcon variant="subtle" size="xl" radius="xl" >
                                    <IconShoppingCart />
                                </ActionIcon>
                            </Link>
                            <Box visibleFrom="md" >
                                <Popover shadow="md" position="bottom" trapFocus withArrow opened={opened} onChange={v => !v ? close() : null}>
                                    <Popover.Target>
                                        <Button onMouseEnter={open}>My Account</Button>
                                    </Popover.Target>
                                    <Popover.Dropdown p={0}>
                                        <div style={userMenuStyle}>
                                            <div style={{ padding: '12px' }}>
                                                {user?.id ?
                                                    <Group align="center" justify={'space-between'}>
                                                        <Box>
                                                            <Title order={5}>Hej!</Title>
                                                            <Link to={'/user/home'}>My Bookings</Link>
                                                        </Box>
                                                        <Box>
                                                            <Link to="/logout"><Button size="sm" variant="subtle">Logout</Button></Link>
                                                        </Box>
                                                    </Group>
                                                    : <UserLogin />}
                                            </div>
                                            <div style={menuArtisantStyle}>
                                                <Stack style={{ padding: 8 }} >
                                                    <Title order={3}>Artisan?</Title>
                                                    <Link to="/partner/signup"><Button radius="xl" variant="outline" >Signup</Button></Link>
                                                </Stack>
                                            </div>
                                        </div>
                                    </Popover.Dropdown>
                                </Popover>
                            </Box>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
        <Grid gutter={0}>
            <Grid.Col span={{ base: 0, md: 12 }} visibleFrom="md" style={{ borderBottom: '1px solid var(--ui-color-black)' }} >
                <AppNavigation.MainMenu />
            </Grid.Col>
        </Grid>
    </>
}