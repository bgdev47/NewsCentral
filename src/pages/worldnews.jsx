import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function WorldNewsPage(props) {
  const { worldArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>Global News</title>
        <meta 
          name='description'
          description='Browse all the global news of today via BBC News UK'
        />
      </Head>
      <HeroSection 
        title='Global' 
        description='Catch Up On All Global News via BBC News'
        bgImage="/backgrounds/global.webp"
      />
      {worldArticles.length > 0 && <ArticlesList articles={worldArticles} />}
    </Fragment>
  );
}

// SERVER SIDE GENERATION (snippet: "ngss")
export const getServerSideProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/everything?sources=bbc-news&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      worldArticles: articles
    }
  };
};

export default WorldNewsPage;