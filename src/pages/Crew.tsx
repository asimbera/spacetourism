import styled from '@emotion/styled';
import media from 'css-in-js-media';
import { useState } from 'react';
import { getAssetUrl } from '../utils';
import { crew } from './data.json';

const backgrounds = {
  mobile: getAssetUrl('/images/crew/background-crew-mobile.jpg'),
  tablet: getAssetUrl('/images/crew/background-crew-tablet.jpg'),
  desktop: getAssetUrl('/images/crew/background-crew-desktop.jpg'),
};

const Crew = styled.div`
  min-height: 100vh;
  /* height: 100vh; */
  background-image: url(${backgrounds.mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${media('>=tablet')} {
    height: max-content;
    background-image: url(${backgrounds.tablet});
  }
  ${media('>=desktop')} {
    height: max-content;
    background-image: url(${backgrounds.desktop});
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 88px 24px 104px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-white);

  ${media('>=tablet')} {
    padding: 136px 38px 0px 38px;
    align-items: flex-start;
  }

  ${media('>=desktop')} {
    padding: 190px 166px 0 137px;
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
    flex-direction: column-reverse;
  }

  ${media('>=desktop')} {
    margin-top: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
const CrewImage = styled.img`
  height: 220px;
  width: auto;
  object-fit: cover;
  position: relative;

  ${media('>=tablet')} {
    margin-top: 40px;
    height: 500px;
    width: auto;
  }

  ${media('>=desktop')} {
    height: 665px;
  }
`;

const CrewImageBottomBorder = styled.div`
  height: 1px;
  width: 100%;
  background-color: #383b4b;
  ${media('>=tablet')} {
    display: none;
  }
`;

const PagerGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media('>=tablet')} {
    margin-top: 0;
    flex-direction: column-reverse;
  }
  ${media('>=desktop')} {
    align-items: flex-start;
  }
`;
const PagerIcons = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  * + * {
    margin-left: 16px;
    ${media('>=desktop')} {
      margin-left: 24px;
    }
  }

  ${media('>=tablet')} {
    margin-top: 40px;
  }
  ${media('>=desktop')} {
    margin-top: 88px;
  }
`;

const PagerIcon = styled.div<{ active?: boolean }>`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? '#ffffff' : '#979797')};
  border-radius: 50%;

  ${media('>=desktop')} {
    height: 15px;
    width: 15px;
  }
`;

const CrewDetails = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media('>=tablet')} {
    margin-top: 0;
    padding: 0 50px;
  }
  ${media('>=desktop')} {
    align-items: flex-start;
    padding: 0;
  }
`;

const CrewRole = styled.p`
  font-family: 'Bellefair', serif;
  font-size: 16px;
  text-transform: uppercase;
  opacity: 49%;
  ${media('>=tablet')} {
    font-size: 24px;
  }

  ${media('>=desktop')} {
    font-size: 32px;
  }
`;
const CrewName = styled.p`
  margin-top: 8px;
  font-family: 'Bellefair', serif;
  font-size: 24px;
  text-transform: uppercase;

  ${media('>=tablet')} {
    font-size: 40px;
  }

  ${media('>=desktop')} {
    font-size: 56px;
  }
`;
const CrewSummary = styled.p`
  margin-top: 15px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  color: var(--clr-accent);
  text-align: center;
  ${media('>=desktop')} {
    text-align: left;
    max-width: 444px;
    font-size: 18px;
  }
`;

export default () => {
  const [current, setCurrent] = useState(0);
  const { role, bio, name, images } = crew[current];
  return (
    <Crew>
      <Container>
        <Heading>
          <b style={{ color: 'hsla(0, 0%, 100%, 0.25)' }}>02</b> Meet your crew
        </Heading>
        <Content>
          <CrewImage src={getAssetUrl(images.webp)} />
          <CrewImageBottomBorder />
          <PagerGroup>
            <PagerIcons>
              {crew.map((item, key) =>
                key === current ? (
                  <PagerIcon
                    key={item.name}
                    active
                    onClick={() => setCurrent(key)}
                  />
                ) : (
                  <PagerIcon onClick={() => setCurrent(key)} key={item.name} />
                )
              )}
            </PagerIcons>
            <CrewDetails>
              <CrewRole>{role}</CrewRole>
              <CrewName>{name}</CrewName>
              <CrewSummary>{bio}</CrewSummary>
            </CrewDetails>
          </PagerGroup>
        </Content>
      </Container>
    </Crew>
  );
};
