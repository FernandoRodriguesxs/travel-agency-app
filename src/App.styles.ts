import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }

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
      max-inline-size: 600px;
      padding: 12px;
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
  margin-top: 64px;

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
      border-radius: 32px;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 250px;
      }
    }
  }

  .about-right {
    display: flex;

    img {
      margin-top: 6px;
      height: 620px;
      width: 460px;
      border-radius: 32px;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`

export const TitleColumn = styled.section`
  display: flex;
  margin-top: 64px;

  h2 {
    font-size: 48px;
    @media screen and (max-width: 768px) {
      display: flex;
      font-size: 24px;
    }
  }
`

export const CardOutdoor = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;
  gap: 36px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    display: flex;
    flex-direction: column;

    gap: 12px;

    picture img {
      height: 350px;
      width: 100%;
      border-radius: 32px;
    }
  }
`

export const ResortText = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  h2 {
    font-size: 48px;
  }
`

export const ResortCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;

  margin-bottom: 96px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  picture img {
    width: 400px;
    border-radius: 32px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const HotelCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 36px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .cards-hotel {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 600px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    picture img {
      width: 100%;
      border-radius: 32px;
    }

    h3 {
      font-size: 24px;
    }
  }
`

export const SubscribeSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 600px;

  padding: 12px;
  gap: 32px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../src/assets/balao2.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;

  margin-top: 64px;

  .text-sub {
    color: ${({ theme }) => theme.colors.white};

    h3 {
      font-size: 48px;

      @media screen and (max-width: 768px) {
        font-size: 26px;
        text-align: center;
      }
    }
  }

  .newsletter {
    display: flex;
    max-width: 900px;
    width: 100%;

    input {
      display: flex;
      align-items: center;

      height: 48px;
      width: 100%;

      @media screen and (max-width: 768px) {
        width: auto;
      }

      background-color: rgba(136, 138, 138, 0.1);
      caret-color: white;
      color: white;

      border: none;
      outline: none;

      padding: 16px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors.white};

      border: none;
      outline: none;

      padding: 12px 24px;
    }
  }
`
