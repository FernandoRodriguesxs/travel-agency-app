import { HeaderContainer, LogoBox, HeaderOptions, SignUp } from './style'

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
        <SignUp>
          <div>Sign Up</div>
        </SignUp>
      </nav>
    </HeaderContainer>
  )
}
