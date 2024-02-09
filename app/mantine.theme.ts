import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem(300),
    xs: rem(400),
    sm: rem(500),
    md: rem(800),
    lg: rem(700),
    xl: rem(800),
    xxl: rem(900),
};

const theme = {
    fontFamily: 'Inter, sans-serif',
    components: {
        Container: {
            defaultProps: {
                sizes: {
                    xs: 600,
                    sm: 800,
                    md: 1200,
                    lg: 1200,
                    xl: 1400,
                },
            }
        }
    },
};


export default theme;