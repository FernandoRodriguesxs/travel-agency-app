import { ReactNode } from 'react'
import { ButtonLearnMoreStyled, ButtonSignUpStyled } from './style'

interface IButtonSignUpProps {
  children: ReactNode
}

interface IButtonLearnMoreProps {
  children: ReactNode
}

export const ButtonSignUp = ({ children }: IButtonSignUpProps) => {
  return <ButtonSignUpStyled>{children}</ButtonSignUpStyled>
}

export const ButtonLearnMore = ({ children }: IButtonLearnMoreProps) => {
  return <ButtonLearnMoreStyled>{children}</ButtonLearnMoreStyled>
}
