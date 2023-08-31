import { HeaderContainer, LogoBox, HeaderOptions } from './style'
import { ButtonSignUp } from '../Button'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LogoBox>
          <h2>TRIBE</h2>
        </LogoBox>
        <HeaderOptions>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICE</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
        </HeaderOptions>
        <ButtonSignUp>SIGN UP</ButtonSignUp>
      </nav>
    </HeaderContainer>
  )
}
