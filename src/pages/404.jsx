// Imports
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h1>Error 404</h1>
        <h2>Page not found!</h2><br />
        <Link to="/" className="homeBtn">
          <FiHome id="btn-icon" />
        </Link>
      </Container>
    </div>
  )
}

// Export
export default NotFound