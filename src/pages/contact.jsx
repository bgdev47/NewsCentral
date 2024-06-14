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
        bgImage="/backgrounds/contact.webp"
      />
      <div style={{ textAlign: 'center' }}>
      <h1><u>How To Contact</u></h1>
        <div>
          <h2>Phone</h2>
          <p>Customer Support: (03) 9124-2345</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>Customer Support: contact@newscentral.com.au</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactPage;