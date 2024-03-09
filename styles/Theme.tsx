import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFF0'
        },
        text: {
            primary: '#373D3F'
        },
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#00ABE4",
        },
        action: {
            hover: '#E9F1FA'
        }
    },

    spacing: 8,

    typography: {
        fontFamily: [
            'Roboto Slab',
            'Lato',
            'sans-serif'
     ].join(','),
     h1: {
        fontFamily: 'Roboto Slab',
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2, // Adjust line height as needed
      },
      h2: {
        fontFamily: 'Roboto Slab',
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3, // Adjust line height as needed
      },
      h3: {
        fontFamily: 'Roboto Slab',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.4, // Adjust line height as needed
      },
      h4: {
        fontFamily: 'Roboto Slab',
        fontWeight: 400,
        fontSize: '1.2rem',
        lineHeight: 1.5, // Adjust line height as needed
      },
      h5:{
        fontFamily: 'Roboto Slab',
        fontWeight: 400,
        fontSize: '1.1rem',
        lineHeight: 1.5, // Adjust line height as needed
      },
      body1: {
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '1.15rem',
        lineHeight: 1.6, // Adjust line height as needed
     },
    },
    components: {
        MuiButton: {
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: '#00ABE4',
                color: 'white',
                boxShadow: '0 1.5px 2.5px 1px rgba(219, 219, 219, .75)',
                '&:hover': {
                    backgroundColor: '#32ccff',
                    boxShadow: '0 2px 3px 1.5px rgba(148, 148, 148, .75)',
                },
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                backgroundColor: 'none',
                color: '#00ABE4',
                borderColor: '#00ABE4',
                margin: 2,
                '&:hover':{
                    borderColor: '#32ccff',
                    color: '#32ccff'
                }
              },
            },
          ],
        },
    },
});

export default theme;