import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

function PrivacyPage() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy</title>
        <meta 
          name='description'
          description='All the details of our privacy policy'
        />
      </Head>
      <HeroSection 
        title='PRIVACY POLICY'
        bgImage="/backgrounds/privacy.jpg"
      />
    </Fragment>
  );
}

export default PrivacyPage;