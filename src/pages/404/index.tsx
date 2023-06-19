import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPageWrapper = styled.div`
  padding: 50px;
  max-width: 1024px;

  h1 {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <h1>Page not found</h1>
      <Link to="/">Go to Homepage</Link>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
