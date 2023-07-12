import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_800};
`

export const Content = styled.View`
  flex-grow: 1;
  padding: 32px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  margin-top: 32px;
  margin-bottom: 5px;
`

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  text-align: justify;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;

  margin-top: 32px;
  padding: 32px;
`

export const AsyncMessage = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  text-align: center;
  flex: 1;
  margin: 32px;
`
