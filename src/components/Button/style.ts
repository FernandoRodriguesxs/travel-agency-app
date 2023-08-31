import styled from 'styled-components'

const ButtonStyled = styled.button`
  height: 56px;
  width: 164px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const ButtonSignUpStyled = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
`
export const ButtonLearnMoreStyled = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.blue.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 12px;
`
