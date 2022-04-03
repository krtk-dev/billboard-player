import styled from '@emotion/styled';
import { COLORS } from '../../constants/styles';
import HomeHeader from './HomeHeader';

const Container = styled.div`
  background-color: ${COLORS.dark_gray};
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <HomeHeader />
    </Container>
  );
};

export default Home;
