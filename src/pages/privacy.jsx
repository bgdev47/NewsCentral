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
        title ='PRIVACY POLICY'
        bgImage="/backgrounds/privacy.jpg"
      />
      <div style={{ textAlign: 'center' }}>
        <h2>What Is Personal Information & Why Do We Collect It?</h2>
        <p>Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes names, <br />addresses, email addresses, phone and facsimile numbers. We don’t guarantee website links or policy of authorised third parties. We collect your <br />Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also <br />use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect <br />such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing. When we collect Personal Information <br />we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.</p>
        <h2>Sensitive Information</h2>
        <p>Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individuals racial <br />or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade <br />union or other professional body, criminal record or health information. Sensitive information will be used by us only: <br /><br />
        •	For the primary purpose for which it was obtained <br />
        •	For a secondary purpose that is directly related to the primary purpose <br />
        •	With your consent; or where required or authorised by law.</p>
        <h2>Third Parties</h2>
        <p>Where reasonable and practicable to do so, we will collect your Personal Information only from you. <br />However, in some circumstances we may be provided with information by third parties. In such a case we will take <br />reasonable steps to ensure that you are made aware of the information provided to us by the third party.</p>
        <h2>Security of Personal Information</h2>
        <p>Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from <br />unauthorized access, modification or disclosure. When your Personal Information is no longer needed for the purpose for <br />which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. <br />However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.</p>
        <h2>Access To Your Personal Information</h2>
        <p>You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish <br />to access your Personal Information, please contact us in writing. NewsCentral will not charge any fee for your access request, <br />but may charge an administrative fee for providing a copy of your Personal Information. In order to protect your Personal Information <br />we may require identification from you before releasing the requested information.</p>
        <h2>Maintaining The Quality of Your Personal Information</h2>
        <p>It is an important to us that your Personal Information is up to date. We  will  take reasonable steps to make sure that your <br />Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, <br />please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.</p>
      </div>
    </Fragment>
  );
}

export default PrivacyPage;