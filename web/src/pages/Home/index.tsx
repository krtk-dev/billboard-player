import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import { COLORS } from '../../constants/styles';
import { Data } from '../../constants/types';
import { DATA_URL } from '../../constants/values';
import HomeHeader from './HomeHeader';

const Container = styled.div`
  background-color: ${COLORS.dark_gray};
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  flex-direction: row;
`;

const YoutubeContainer = styled.div`
  flex: 1;
  position: relative;
  & iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ItemContainer = styled.div`
  flex: 1;
`;

const Home = () => {
  const [data, setData] = useState<Data[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // fetch billboard hot 100 data
    fetch(DATA_URL)
      .then(r => r.json())
      .then(v => setData(v.data));
  }, []);

  return (
    <Container>
      <HomeHeader />
      {data.length && (
        <ContentContainer>
          <YoutubeContainer>
            <Youtube
              opts={{ playerVars: { autoplay: 1 } }}
              videoId={data[index].youtube_id}
              onEnd={() => setIndex(idx => (idx + 1) % data.length)}
            />
          </YoutubeContainer>
          <ItemContainer />
        </ContentContainer>
      )}
    </Container>
  );
};

export default Home;
