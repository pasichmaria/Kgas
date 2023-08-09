import {createTheme} from '@mui/material/styles';

export  const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(60,231,219,0.92)',
        },
        secondary: {
            main: '#6abce7',
        },
        error: {
            main: '#dc0c11',
            border: '#e33437',
            borderColor: '#560b0c',
        },
        background: {
            default: '#ffffff',
        },
    },


    typography: {

        fontFamily: 'Andale Mono, monospace',
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    components: {
        MuiTextField: {
            defaultProps: {
                sx: {
                    variant: 'outlined',
                    textAlign: 'center',
                    marginTop: 5,
                    borderRadius: 1,
                    borderColor: 'secondary.main',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {}
                    }
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                sx: {
                    mt: 10,
                    width: 1,
                    py: 8,
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                sx: {
                    borderRadius: 1,
                    borderColor: 'secondary.main ',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {}
                    }
                },
            },
        },



        MuiTypography: {
            defaultProps: {
                sx: {
                    variant: 'body2',
                    color: 'text.secondary',
                    textAlign: 'center',
                },
            },
        },
    },
});
