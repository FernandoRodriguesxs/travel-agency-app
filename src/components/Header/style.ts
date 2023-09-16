import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 96px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 8px;
`

export const HeaderOptions = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    padding: 8px;
    margin: 26px;
    gap: 6px;

    list-style: none;
    font-weight: 500;
  }
`
