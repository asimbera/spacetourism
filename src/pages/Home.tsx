import styled from '@emotion/styled';
import media from 'css-in-js-media';

const Home = styled.div`
  min-height: 100vh;
  height: 100vh;
  background-image: url('/src/assets/home/background-home-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${media('>=tablet')} {
    height: max-content;
    background-image: url('/src/assets/home/background-home-tablet.jpg');
  }
  ${media('>=desktop')} {
    height: max-content;
    background-image: url('/src/assets/home/background-home-desktop.jpg');
  }
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 112px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--clr-white);
  ${media('>=tablet')} {
    padding: 202px 159px 90px 159px;
  }
  ${media('>=desktop')} {
    flex-direction: row;
    align-items: flex-end;
    padding: 300px 165px 131px 165px;
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media('>=tablet')} {
    margin-bottom: 156px;
  }
  ${media('>=desktop')} {
    max-width: 450px;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;
const FirstPara = styled.p`
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;

  ${media('>=tablet')} {
    font-size: 20px;
  }
  ${media('>=desktop')} {
    font-size: 28px;
  }
`;
const SecondPara = styled.p`
  font-family: 'Bellefair', serif;
  font-size: 80px;
  line-height: 100px;
  text-transform: uppercase;

  ${media('>=tablet')} {
    font-size: 150px;
    line-height: 150px;
    margin: 24px 0;
  }
  ${media('>=desktop')} {
    font-size: 150px;
    margin: 24px 0;
  }
`;
const ThirdPara = styled.p`
  font-size: 15px;
  text-align: center;
  color: var(--clr-accent);
  ${media('>=tablet')} {
    font-size: 16px;
    line-height: 28px;
  }
  ${media('>=desktop')} {
    font-size: 18px;
    line-height: 32px;
    text-align: left;
  }
`;
const ExploreButton = styled.button`
  padding: 68px 34px;
  border-radius: 50%;
  font-family: 'Bellefair', serif;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--clr-primary);
  border: none;

  &:hover {
    outline-width: 44px;
    outline-color: hsla(0, 0%, 100%, 0.1);
    outline-style: solid;
  }
`;

export default () => (
  <Home>
    <Content>
      <Paragraph>
        <FirstPara>So, you want to travel to</FirstPara>
        <SecondPara>Space</SecondPara>
        <ThirdPara>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </ThirdPara>
      </Paragraph>
      <ExploreButton>Explore</ExploreButton>
    </Content>
  </Home>
);
