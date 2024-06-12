import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta 
          name='description'
          description='Have any questions? Get in touch!'
        />
      </Head>
      <HeroSection 
        title='CONTACT US' 
        bgImage="/backgrounds/contact.jpg"
      />
    </Fragment>
  );
}

export default ContactPage;