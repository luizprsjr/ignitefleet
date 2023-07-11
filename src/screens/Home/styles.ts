import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_800};
`

export const Content = styled.View`
  flex: 1;
  padding: 0 32px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};

  margin-bottom: 12px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray_400};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  margin-top: 32px;
  text-align: center;
`
