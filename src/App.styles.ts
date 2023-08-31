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
