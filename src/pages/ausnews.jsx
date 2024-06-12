import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function AusNewsPage(props) {
  const { ausArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>National News</title>
        <meta 
          name='description'
          description='Browse all the Australian news of today via ABC News AU'
        />
      </Head>
      <HeroSection 
        title='National' 
        description='Catch Up On All Australian News via ABC News'
        bgImage="/backgrounds/local.jpg"
      />
      {ausArticles.length > 0 && <ArticlesList articles={ausArticles} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (ABC News AU)
  const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      ausArticles: articles
    },
    revalidate: 60
  };
};

export default AusNewsPage;