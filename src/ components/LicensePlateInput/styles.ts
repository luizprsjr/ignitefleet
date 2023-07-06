import { styled } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: ${({ theme }) => theme.font_size.xxxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};

  text-align: center;
  margin-top: 16px;
`
