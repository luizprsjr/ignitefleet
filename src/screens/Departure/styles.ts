import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_800};
`
export const Content = styled.View`
  flex: 1;
  gap: 16px;
  padding: 32px;
  margin-top: 16px;
`
export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  text-align: center;

  margin: 24px;
`
