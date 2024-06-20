import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
        <Image 
          src={"/images/speech.webp"}
          alt='yellow papers on top of green surface resembling a speech bubble'
          width={500}
          height={350}
          style={{ 
            paddingTop: '40px'
          }}
        />
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