/* eslint-disable prettier/prettier */
import { styled } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 32px 0;
  padding: 22px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_700};
  flex-direction: row;
  align-items: center;
`

export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  margin-right: 12px;

  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  flex: 1;
  text-align: justify;
  textAlignVertical: center;
`

export const TextHighlight = styled.Text`
  color: ${({ theme }) => theme.colors.brand_light};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`
