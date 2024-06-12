import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function HomePage(props) {
  const { articles } = props 

  return (
    <Fragment>
      <Head>
        <title>NEWSCENTRAL | Home</title>
        <meta 
          name='description'
          description='Browse all the news of today from around the globe'
        />
      </Head>
      <HeroSection 
        title='NewsCentral' 
        description='Catch Up On All Your Latest National & Global News'
        bgImage="/backgrounds/home.jpg"
      />
      {articles.length > 0 && <ArticlesList articles={articles} />}
    </Fragment>
  )
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // Fetch data from Internal API ("Code News")
  const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
  const data = await response.json();

  // Returned data as props & ISR functionality
  return {
    props: {
      articles: data
    },
    revalidate: 60 * 60
  };
};

export default HomePage;