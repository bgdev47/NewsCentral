import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta 
          name='description'
          description='Learn about who we are'
        />
      </Head>
      <HeroSection 
        title='ABOUT US' 
        bgImage="/backgrounds/about.jpg"
      />
    </Fragment>
  );
}

export default AboutPage;