import React from "react";
import Layout from "../../components/Layout";
import theme from "../../styles/Theme";

import style from './style.module.css'

//material ui imports
import { Container, useMediaQuery, Typography, Box, Grid, Button } from "@mui/material";

const About: React.FC = (props) => {
    const isSmall : Boolean = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Layout>
            <Container maxWidth="lg" disableGutters>
                {/* gradiant background */}
                <Box sx={{ width: '100%', minHeight: '300px', overflow: 'hidden', position: 'absolute', top: '0', left: '0', zIndex: '-90', padding: '0px',  margin: '0px',
                backgroundImage: `linear-gradient(
                45deg,
                hsl(341deg 49% 78%) 0%,
                hsl(321deg 47% 79%) 11%,
                hsl(285deg 50% 81%) 22%,
                hsl(249deg 89% 87%) 33%,
                hsl(219deg 100% 84%) 44%,
                hsl(201deg 100% 77%) 56%,
                hsl(191deg 100% 69%) 67%,
                hsl(186deg 100% 59%) 78%,
                hsl(181deg 94% 54%) 89%,
                hsl(171deg 94% 63%) 100%
                )`
                }}> 
                </Box>

                <Container sx={{padding: '40px', minHeight: '300px'}}>
                    <Typography variant="h1" textAlign='center'>About me</Typography>
                </Container>
                <Container>
                    <Grid container  sx={{marginTop: '-120px'}}>
                        <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}} className={style.container}>
                            <img src="/static/images/picOfme.jpeg" className={style.myImage} alt="a picture of me standing in front of a palm tree"/>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{paddingY: {md:'80px', xs: '16px'}, paddingLeft: {md:'16px', xs: '0px'}}}>
                            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut voluptate ea ipsa soluta, fuga culpa minus repudiandae laudantium ad maiores aperiam quaerat harum eum eveniet eaque cumque quam quisquam architecto tempore ipsum magnam illum! Ullam est inventore explicabo, enim repudiandae ipsa accusantium sunt, voluptatibus dignissimos, perspiciatis consectetur quasi sed fuga qui neque ad animi dolorem numquam quae! Asperiores officia quam numquam explicabo praesentium minus odit aliquid itaque, illo sint incidunt recusandae dolor perspiciatis, mollitia quasi est, ullam ex tempore aspernatur vel sed. Quam iusto facilis animi molestias nostrum quos quod laudantium quaerat, neque hic placeat voluptatibus recusandae sint quo?</Typography>
                            <Button variant="contained" sx={{margin: '16px auto'}}>Resume</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Layout>
    );
}


export default About