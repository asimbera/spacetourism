import styled from '@emotion/styled';
import media from 'css-in-js-media';
import { useState } from 'react';
import { destinations } from './data.json';

const Destination = styled.div`
  min-height: 100vh;
  /* height: 100vh; */
  background-image: url('/src/assets/destination/background-destination-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${media('>=tablet')} {
    height: max-content;
    background-image: url('/src/assets/destination/background-destination-tablet.jpg');
  }
  ${media('>=desktop')} {
    height: max-content;
    background-image: url('/src/assets/destination/background-destination-desktop.jpg');
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 88px 24px 58px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-white);

  ${media('>=tablet')} {
    padding: 136px 38px 62px 38px;
    align-items: flex-start;
  }

  ${media('>=desktop')} {
    padding: 190px 130px 118px 120px;
  }
`;
const Heading = styled.h6`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2.7px;

  ${media('>=tablet')} {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  ${media('>=desktop')} {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`;
const Content = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media('>=tablet')} {
    margin-top: 60px;
  }

  ${media('>=desktop')} {
    margin-top: 64px;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const PlanetImage = styled.img`
  height: 170px;
  width: 170px;

  ${media('>=tablet')} {
    height: 300px;
    width: 300px;
  }
`;
const Tabs = styled.div`
  margin-top: 26px;
  ${media('>=tablet')} {
    margin-top: 53px;
  }

  ${media('>=desktop')} {
    margin-top: 0;
    width: 472px;
  }
`;
const TabBar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${media('>=desktop')} {
    justify-content: flex-start;
  }

  * + * {
    margin-left: 26px;

    ${media('>=tablet')} {
      margin-left: 36px;
    }
  }
`;
type TabItemProps = { active?: boolean };
const TabItem = styled.div<TabItemProps>`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.3px;
  cursor: pointer;

  ${media('>=tablet')} {
    font-size: 16px;
    padding-bottom: 12px;
  }

  ${(props) =>
    props.active
      ? 'border-bottom: 3px solid #ffffff;'
      : `
  &:hover {
    border-bottom: 3px solid #969696;
  }`}
`;
const TabView = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media('>=tablet')} {
    margin-top: 32px;
  }
  ${media('>=desktop')} {
    align-items: flex-start;
  }
`;

const PlanetName = styled.p`
  font-family: 'Bellefair', serif;
  font-size: 56px;
  text-transform: uppercase;

  ${media('>=tablet')} {
    font-size: 80px;
  }

  ${media('>=desktop')} {
    font-size: 100px;
  }
`;

const PlanetSummary = styled.p`
  font-size: 15px;
  color: var(--clr-accent);
  text-align: center;

  ${media('>=tablet')} {
    font-size: 16px;
    margin-top: 8px;
    padding: 0 50px;
  }

  ${media('>=desktop')} {
    font-size: 18px;
    text-align: left;
    padding: 0;
  }
`;

const Seperator = styled.div`
  margin: 32px 0;
  height: 1px;
  background-color: #383b4b;
  width: 100%;
  ${media('>=tablet')} {
    margin: 50px 0 28px 0;
    width: 90%;
  }
  ${media('>=desktop')} {
    margin: 54px 0 28px 0;
    width: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  & * + * {
    margin-top: 32px;
    ${media('>=tablet')} {
      margin-top: 0;
    }
  }

  ${media('>=tablet')} {
    flex-direction: row;
  }

  ${media('>=desktop')} {
    align-items: flex-start;
  }
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  * + * {
    margin-top: 12px;
  }

  ${media('>=tablet')} {
    padding: 0 50px;
  }

  ${media('>=desktop')} {
    padding: 0;
    padding-right: 80px;
    align-items: flex-start;
  }
`;

const SubTitle = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.3px;
  color: var(--clr-accent);
  text-align: center;
`;
const SubText = styled.p`
  font-family: 'Bellefair', serif;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;

  ${media('>=tablet')} {
    margin-left: 0;
  }
`;

export default () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, description, distance, travel, images } =
    destinations[currentIndex];

  return (
    <Destination>
      <Container>
        <Heading>
          <b style={{ color: 'hsla(0, 0%, 100%, 0.25)' }}>01</b> Pick your
          destination
        </Heading>
        <Content>
          <PlanetImage src={images.webp} />
          <Tabs>
            <TabBar>
              {destinations.map((item, key) => (
                <TabItem
                  key={key}
                  active={key === currentIndex}
                  onClick={() => setCurrentIndex(key)}
                >
                  {item.name}
                </TabItem>
              ))}
            </TabBar>
            <TabView>
              <PlanetName>{name}</PlanetName>
              <PlanetSummary>{description}</PlanetSummary>
              <Seperator />
              <Details>
                <DetailGroup>
                  <SubTitle>Avg. distance</SubTitle>
                  <SubText>{distance}</SubText>
                </DetailGroup>
                <DetailGroup>
                  <SubTitle>Est. travel time</SubTitle>
                  <SubText>{travel}</SubText>
                </DetailGroup>
              </Details>
            </TabView>
          </Tabs>
        </Content>
      </Container>
    </Destination>
  );
};
