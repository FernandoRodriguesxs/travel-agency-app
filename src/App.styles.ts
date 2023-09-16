import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

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
      border-radius: 32px;
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

  h2 {
    font-size: 48px;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`

export const CardOutdoor = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .card {
    display: flex;
    flex-direction: column;

    gap: 12px;

    picture img {
      height: 350px;
      border-radius: 32px;
    }
  }
`
export const ResortText = styled.section`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 48px;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
export const ResortCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 96px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    gap: 36px;
  }

  picture img {
    width: 400px;
    border-radius: 32px;
  }
`

export const HotelCards = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    gap: 36px;
  }

  .cards-hotel {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 500px;

    picture img {
      width: 400px;
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

  height: 400px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('../src/assets/balao2.jpg') no-repeat;
  background-size: cover;

  margin-top: 96px;

  .text-sub {
    color: ${({ theme }) => theme.colors.white};

    h3 {
      font-size: 48px;
    }
  }

  .newsletter {
    display: flex;
    width: 900px;

    input {
      display: flex;
      align-items: center;

      height: 48px;
      width: 700px;

      background-color: rgba(136, 138, 138, 0.1);

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
      width: 200px;
    }
  }
`
