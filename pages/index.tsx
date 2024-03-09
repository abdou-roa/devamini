import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../prisma/lib/prisma"

//material ui imports:
import { Typography, Container, Box, useMediaQuery, Button, Grid, Paper, Card, CardContent } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import theme from "../styles/Theme"
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ]
  return { 
    props: { feed }, 
    revalidate: 10 
  }
}

type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Box sx={{ width: '100%', minHeight: '800px', overflow: 'hidden', position: 'absolute', top: '0', left: '0', zIndex: '-90', padding: '0px',  margin: '0px', backgroundImage: `linear-gradient(
      45deg,
      hsl(195deg 100% 60%) 0%,
      hsl(197deg 100% 68%) 11%,
      hsl(199deg 100% 73%) 22%,
      hsl(201deg 100% 78%) 33%,
      hsl(203deg 100% 81%) 44%,
      hsl(205deg 100% 85%) 56%,
      hsl(207deg 98% 88%) 67%,
      hsl(208deg 93% 90%) 78%,
      hsl(210deg 82% 93%) 89%,
      hsl(212deg 63% 95%) 100%
    )`,}}>
      
      </Box>
      <Container maxWidth="lg" disableGutters={useMediaQuery(theme.breakpoints.down('lg'))} sx={{zIndex:'1'}} >
        {/* Hero section */}
        <Container >
            <Box maxWidth={'sm'} minHeight={'600px'} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h1">I'm Abdellah Amini Alaoui</Typography>
              <Typography variant="body1" sx={{margin: theme.spacing(1,0)}}>I’m a dedicated software developer who thrives on problem-solving and tackling challenges head-on. With a strong foundation in several programming languages and web development technologies, I’m always ready to dive into code to create innovative solutions.</Typography>

              <Box sx={{
                display: 'flex',
                margin: theme.spacing(2, 0)
              }}>
                <Button variant="contained" sx={{}}>see work</Button>
                <Button variant="outlined">get in touch</Button>
              </Box>
            </Box>
        </Container>
        {/* Services & social links section */}
        <Container disableGutters>
          <Box>
            <Grid container  justifyContent={'center'}>
              <Grid item xs={12} lg={6}  sx={{
                margin: theme.spacing(2),
                padding: '40px 16px',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                //border: '1px solid rgba(0, 0, 0, 0.3)',
              }}>
                <Typography variant="h3" sx={{marginBottom: '16px'}}>Services</Typography>
                <Box>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box>
                            <Typography variant="h5">Service 1</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore ipsam illo voluptatum ratione iusto!</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Discover more</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box>
                            <Typography variant="h5">Service 1</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore ipsam illo voluptatum ratione iusto!</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Discover more</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box>
                            <Typography variant="h5">Service 1</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore ipsam illo voluptatum ratione iusto!</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Discover more</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box>
                            <Typography variant="h5">Service 1</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore ipsam illo voluptatum ratione iusto!</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Discover more</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} lg={5}  sx={{
                margin: theme.spacing(2),
                padding: '40px 16px',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                //border: '1px solid rgba(0, 0, 0, 0.3)',
              }}>
                <Typography variant="h3" sx={{marginBottom: '16px'}}>Follow me on</Typography>
                <Box>
                  <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box sx={{display: 'flex'}}>
                            <GitHubIcon/>
                            <Typography variant="h5">/Github</Typography>
                          </Box>
                          <Box sx={{display: 'flex', flexDirection: 'column', marginY: '8px'}}>
                            <Typography variant="caption">1k stars</Typography>
                            <Typography variant="caption">1k followers</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Follow</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box sx={{display: 'flex'}}>
                            <LinkedInIcon/>
                            <Typography variant="h5">/LinkedIn</Typography>
                          </Box>
                          <Box sx={{display: 'flex', flexDirection: 'column', marginY: '8px'}}>
                            <Typography variant="caption">1k stars</Typography>
                            <Typography variant="caption">1k followers</Typography>
                          </Box>
                          <Box>
                          <Button variant="contained" sx={{fontSize: '.75rem'}}>Follow</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                      <Card elevation={4} sx={{borderRadius: '8px'}}>
                        <CardContent>
                          <Box sx={{display: 'flex'}}>
                            <XIcon/>
                            <Typography variant="h5"> / Twitter</Typography>
                          </Box>
                          <Box sx={{display: 'flex', flexDirection: 'column', marginY: '8px'}}>
                            <Typography variant="caption">1k stars</Typography>
                            <Typography variant="caption">1k followers</Typography>
                          </Box>
                          <Box>
                            <Button variant="contained" sx={{fontSize: '.75rem'}}>Follow</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Featured work section */}
        <Container disableGutters sx={{marginTop: '40px'}}>
          <Typography variant="h3" sx={{marginBottom: '16px'}}>Featured work</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <Grid container spacing={2} sx={{marginX:'auto'}}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Card elevation={6}  sx={{padding: '8px', borderRadius: '8px'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/default.webp"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} >
                <Card elevation={6} sx={{padding: '8px', borderRadius: '8px'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/default.webp"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                <Card elevation={6} sx={{padding: '8px', borderRadius: '8px'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/default.webp"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
            <Box sx={{paddingY: '24px', display: 'flex', justifyContent: 'center'}}>
              <Button variant="contained">Discover more</Button>
            </Box>
          </Box>
        </Container>

        {/* Latest articles section */}
              
      </Container>
    </Layout>
  )
}

export default Home
