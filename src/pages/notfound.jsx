import { Fragment } from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

function NotFoundPage() {
  return (
    <div className='notFoundWrapper'>
      <Fragment>     
        <h1>Error 404</h1>
        <h2>Oops! Page not found</h2><br/>
        <Link href="/">
          <FiHome className='btn-icon' />
        </Link>
      </Fragment>
    </div>
  )
}

export default NotFoundPage;