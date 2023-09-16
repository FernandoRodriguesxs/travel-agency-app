import { List } from '@phosphor-icons/react'
import { LogoBox, Menu, MobileHeaderContainer } from './style'

export const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <LogoBox>
        <h2>TRIBE</h2>
      </LogoBox>
      <Menu>
        <List size={32} color="white" />
      </Menu>
    </MobileHeaderContainer>
  )
}
