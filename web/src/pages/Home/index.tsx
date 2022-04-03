import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import { BREAK_POINT, COLORS } from '../../constants/styles';
import { Data } from '../../constants/types';
import { DATA_URL } from '../../constants/values';
import HomeHeader from './HomeHeader';
import HomeItem from './HomeItem';

const Container = styled.div`
  background-color: ${COLORS.dark_gray};
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: ${BREAK_POINT}) {
    flex-direction: column;
    height: calc(100vh - 80px);
  }
`;

const YoutubeContainer = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: ${BREAK_POINT}) {
    flex: none;
    width: 100vw;
    height: calc(100vw / 16 * 9);
  }

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
  height: calc(100vh - 80px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: ${BREAK_POINT}) {
    height: auto;
  }
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
          <ItemContainer>
            {data.map((item, _index) => (
              <HomeItem
                key={item.youtube_id}
                data={item}
                isFocused={index === _index}
                onPress={() => setIndex(_index)}
              />
            ))}
          </ItemContainer>
        </ContentContainer>
      )}
    </Container>
  );
};

export default Home;
