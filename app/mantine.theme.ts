import { Card, Container, MantineColorsTuple, MantineProvider, MantineTheme, MantineThemeColors, createTheme, rem } from '@mantine/core';
import classes from './mantine.module.css';

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem(300),
    xs: rem(400),
    sm: rem(500),
    md: rem(800),
    lg: rem(700),
    xl: rem(800),
    xxl: rem(900),
};

const primaryBlue: MantineColorsTuple = [
    '#a6baff', '#6d8eff', '#9cb1ff', '#7896ff', '#5c80ff', '#406aff', '#184bff', '#2353ff',
    '#0038ff', '#0028b5'
];

const theme = createTheme({
    fontFamily: 'Inter, sans-serif',
    colors: {
        blue: primaryBlue
    },
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
        },
        Card: Card.extend({
            classNames: {
				root: classes.cardRoot,
			},
        })
    },
});


export default theme;