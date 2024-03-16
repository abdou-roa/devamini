// pages/[slug].tsx (Individual Post Page)
import { useRouter } from 'next/router';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import Image from 'next/image';


const BlogPost = ({ post }) => {

  if (!post) {
    // Handle case where post is not found (e.g., show a 404 page)
    <Layout>
        return <div>Post not found</div>;
    </Layout>
  }


  return (
    <Layout>
        <div>
            <Image width={250} height={200} src={post.data[0].attributes.cover.data.attributes.url}/>
        <h1>{post.data[0].attributes.title}</h1>
        <ReactMarkdown>{post.data[0].attributes.content}</ReactMarkdown>
        </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`);
    const post = await response.json();
    return { props: { post } };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return { props: { post: null } };
  }
}

export default BlogPost;
