import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//material ui imports
import { Container, Typography, Grid, Box } from "@mui/material";

const NavBar: React.FC = () => {
    return(
        <Container disableGutters  sx={{minWidth: '100vw', backgroundColor: '#fff',  boxSizing: 'border-box', marginTop: '64px', paddingTop: '40px'}}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={6} lg={4} sx={{ color: 'black', display: 'flex', justifyContent:{ xs: 'start', lg:'center'}}}>
                        <Box>
                            <Typography variant="h2">Devamini</Typography>
                            <Typography variant="body1" sx={{maxWidth:'300px', fontSize: '16px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis iste facere sapiente eaque, ipsa ea.</Typography>
                        </Box>
                    </Grid>
                    <Grid item  xs={12} sm={6} lg={4}>
                        <Grid container  columnGap={6}>
                            <Grid item sx={{ color: 'black', display: 'flex', justifyContent:{ xs: 'start', lg:'center'}}}>
                                <Box>
                                    <Typography variant="h3" >General</Typography>
                                    <Box sx={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <Link href="/about">
                                        <Typography sx={{fontSize: '16px'}}>About</Typography>
                                        </Link>
                                        <Link href="/services">
                                        <Typography sx={{fontSize: '16px'}}>Services</Typography>
                                        </Link>
                                        <Link href="/contact">
                                        <Typography sx={{fontSize: '16px'}}>Contact</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item sx={{ color: 'black', display: 'flex', justifyContent:{ xs: 'start', lg:'center'} }}>
                                <Box>
                                    <Typography variant="h3" >Work</Typography>
                                    <Box sx={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <Link href="/about">
                                        <Typography sx={{fontSize: '16px'}}>About</Typography>
                                        </Link>
                                        <Link href="/services">
                                        <Typography sx={{fontSize: '16px'}}>Services</Typography>
                                        </Link>
                                        <Link href="/contact">
                                        <Typography sx={{fontSize: '16px'}}>Contact</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{ margin: '0px auto', paddingTop:'32px', bottom: '0px' }}>
                    <Typography variant="body1" sx={{fontSize: '16px', textAlign: 'center'}}>@Copyright 2024, All rights reserved by Devamini</Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default NavBar;