import styled from '@emotion/styled';
import { mdiApple, mdiGithub, mdiGooglePlay } from '@mdi/js';
import Icon from '@mdi/react';
import { BREAK_POINT, COLORS } from '../../constants/styles';
import {
  APPSTORE_URL,
  GITHUB_URL,
  PLAYSTORE_URL,
} from '../../constants/values';

const Container = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0px 9px 8px #000000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  z-index: 99;
  @media screen and (max-width: ${BREAK_POINT}) {
    padding: 0px 16px;
    box-shadow: none;
    height: 56px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: ${BREAK_POINT}) {
    font-size: 18px;
  }
`;

const IconContainer = styled.div`
  flex-direction: row;
  align-items: center;
`;

const HomeHeader = () => {
  return (
    <Container>
      <Title>Billboard Player</Title>
      <IconContainer>
        <a href={PLAYSTORE_URL}>
          <Icon path={mdiGooglePlay} size="20px" color={COLORS.white} />
        </a>
        <a href={APPSTORE_URL}>
          <Icon
            style={{ marginLeft: 16 }}
            path={mdiApple}
            size="20px"
            color={COLORS.white}
          />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <Icon
            style={{ marginLeft: 16 }}
            path={mdiGithub}
            size="20px"
            color={COLORS.white}
          />
        </a>
      </IconContainer>
    </Container>
  );
};

export default HomeHeader;
