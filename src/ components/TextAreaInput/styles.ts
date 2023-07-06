import { styled } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 150px;
  padding: 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.font_family.regular};
`

export const Input = styled.TextInput`
  font-size: ${({ theme }) => theme.font_size.md}px;
  color: ${({ theme }) => theme.colors.gray_200};
  font-family: ${({ theme }) => theme.font_family.regular};

  vertical-align: top;
  margin-top: 16px;
`
