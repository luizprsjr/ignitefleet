import { Image } from 'expo-image'
import { styled } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 32px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_700};
`
export const Greeting = styled.View`
  flex: 1;
  margin-left: 12px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`
export const Picture = styled(Image)`
  width: 54px;
  height: 54px;
  border-radius: 7px;
`
