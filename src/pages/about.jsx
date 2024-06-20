import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
        bgImage="/backgrounds/about.webp"
      />
      <div style={{ textAlign: 'center' }}>
        <h1><u>A Little About Us...</u></h1>
        <p style={{ fontSize: '20px' }}>NewsCentral was established in 2024 as a student project. <br />Our aim is to provide you with access to news articles breaking current <br />events, both global and national, from ABC News and BBC News sources.</p>
        <div>
          <Image 
          
          
          
          />
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;