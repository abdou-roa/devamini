// pages/BlogList.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

// material ui imports
import { Container, Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
process


const BlogList = ({posts, test, error}) => {
    console.log(posts.data)
  return (
    <Layout>
        <Container maxWidth="lg" disableGutters>
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
                    <Typography variant="h1" textAlign='center'>Blog</Typography>
                </Container>
                <Container disableGutters maxWidth='md'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Grid container spacing={2}>
                        {
                            posts.data?.map((post)=>(
                                <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center'}} key={post.id}>
                                    <Link href={`/blog/${post.attributes.slug}`}>
                                        <Box>
                                            <Card sx={{borderRadius: '8px', maxWidth: '600px', minWidth: {xs:'350px', sm:'500px', md: '420px', lg: '440px' }}}>
                                                <CardActionArea>
                                                    <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    alt="green iguana"
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {post.attributes.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                    {post.attributes.description}
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Box>
                                    </Link>
                                </Grid>
                            ))}
                    </Grid>
                    </Box>
                </Container>
        </Container>
    </Layout>
  );
};

export default BlogList;



export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`);

        if (!res.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await res.json();
        
        return {
            props: {
                posts: data
            },
            revalidate: 10
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: { 
                error: 'Failed to fetch posts',
                posts: []
            }
        };
    }
}
