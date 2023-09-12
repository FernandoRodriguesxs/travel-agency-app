import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../src/assets/hero-img.jpg') no-repeat;
  background-size: cover;

  color: ${({ theme }) => theme.colors.white};

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-top: 128px;

    gap: 12px;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 16px;
    }
  }
`

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 24px;
  margin: 0 auto;
`
export const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  .about-left {
    display: flex;
    flex-direction: column;

    gap: 32px;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }

    img {
      height: 350px;
    }
  }
  .about-right {
    display: flex;

    img {
      margin-top: 6px;
      height: 620px;
      width: 460px;
    }
  }
`
export const TitleColumn = styled.section`
  display: flex;

  h2 {
    font-size: 48px;
    font-weight: 300;
  }
`

export const CardOutdoor = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;
  .card {
    display: flex;
    flex-direction: column;

    gap: 12px;

    picture img {
      height: 350px;
    }
  }
`
export const ResortText = styled.section`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 48px;
    font-weight: 300;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
  }
`
export const ResortCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 96px;

  picture img {
    width: 400px;
  }
`

export const HotelCards = styled.div`
  display: flex;
  justify-content: space-between;

  .cards-hotel {
    picture img {
      width: 550px;
    }
    h3 {
      gap: 24px;
    }
  }
`
