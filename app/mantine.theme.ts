import { Container, MantineProvider, MantineTheme, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem(300),
    xs: rem(400),
    sm: rem(500),
    md: rem(800),
    lg: rem(700),
    xl: rem(800),
    xxl: rem(900),
};

const theme: Partial<MantineTheme> = {
    fontFamily: 'Inter, sans-serif',
    primaryColor: '#0038FF',
    fontSizes: {
        xs: rem(10),
        sm: rem(12),
        md: rem(14),
        lg: rem(16),
        xl: rem(20),
    },
    components: {
        Container: {
            defaultProps: {
                sizes: {
                    xs: rem(400),
                    sm: rem(500),
                    md: rem(600),
                    lg: rem(700),
                    xl: rem(800),
                    xxl: rem(900),
                },
            }
        }
    },
};


export default theme;