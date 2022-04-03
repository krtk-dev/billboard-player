import styled from '@emotion/styled';
import { mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { COLORS } from '../../constants/styles';
import { Data } from '../../constants/types';

interface HomeScreenItemProps {
  data: Data;
  isFocused: boolean;
  onPress: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const RankConatiner = styled.div`
  width: 80px;
  align-items: center;
  justify-content: center;
`;

const Rank = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const RankDeltaContainer = styled.div`
  flex-direction: row;
`;

const RankDelta = styled.div`
  font-size: 10px;
  margin-left: 2px;
`;

const RankDeltaNew = styled.div`
  font-size: 10px;
  color: ${COLORS.yellow};
  font-weight: bold;
`;

const RankDeltaSameAsLastWeek = styled.div`
  font-size: 10px;
  color: ${COLORS.light_gray};
  font-weight: bold;
`;

const NameContainer = styled.div`
  flex: 1;
  padding-left: 8px;
  padding-right: 16px;
  min-width: 100px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Artist = styled.div`
  font-size: 12px;
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const HomeItem: React.FC<HomeScreenItemProps> = props => {
  const { data, isFocused, onPress } = props;
  const { artist, last_week_rank, name, rank, image } = data;
  const isNew = !last_week_rank;
  const rankDelta = last_week_rank ? rank - last_week_rank : 0;
  const isUp = rankDelta > 0;
  return (
    <Container
      onClick={onPress}
      style={{ backgroundColor: isFocused ? COLORS.gray : undefined }}
    >
      <RankConatiner>
        <Rank>{rank}</Rank>
        <RankDeltaContainer>
          {isNew ? (
            <RankDeltaNew>NEW</RankDeltaNew>
          ) : !rankDelta ? (
            <RankDeltaSameAsLastWeek>-</RankDeltaSameAsLastWeek>
          ) : (
            <>
              <Icon
                path={isUp ? mdiChevronDoubleUp : mdiChevronDoubleDown}
                size={'16px'}
                color={isUp ? COLORS.red : COLORS.blue}
              />
              <RankDelta style={{ color: isUp ? COLORS.red : COLORS.blue }}>
                {Math.abs(rankDelta)}
              </RankDelta>
            </>
          )}
        </RankDeltaContainer>
      </RankConatiner>
      <NameContainer>
        <Name>{name}</Name>
        <Artist>{artist}</Artist>
      </NameContainer>
      <Img src={image} />
    </Container>
  );
};

export default HomeItem;
