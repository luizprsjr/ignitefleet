import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }) => theme.colors.gray_800};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.brand_light};
  font-size: ${({ theme }) => theme.font_size.xxxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  text-align: center;
`

export const Slogan = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  text-align: center;

  margin-bottom: 32px;
`
