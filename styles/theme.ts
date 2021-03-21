import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '375px',
    md: '768px',
    lg: '960px',
    xl: '1440px'
})

export const theme = extendTheme({
    fonts: {
        body: "'Commissioner', sans-serif",
    },
    fontSizes: {
        '16': '16px'
    },
    colors: {
        primary: {
            moderateCyan: 'hsl(176, 50%, 47%)',
            darkCyan: 'hsl(176, 72%, 28%)'
        },
        neutral: {
            black: 'hsl(0, 0%, 0%)',
            gray: 'hsl(0, 0%, 48%)'
        }
    },
    breakpoints
})