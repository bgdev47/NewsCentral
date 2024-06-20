import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome } from 'react-icons/fi';

function NotFoundPage() {
  return (
    <div className='notFoundWrapper'>
      <Fragment>     
        <Image 
          src={"/images/error.webp"}
          alt='image displaying an error 404 graphic'
          width={400}
          height={200}
        />
        <h2>Oops! Page not found</h2><br/><br /><br />
        <Link href="/">
          <h2>Return Home</h2>
          <FiHome className='btn-icon' />
        </Link>
      </Fragment>
    </div>
  )
}

export default NotFoundPage;