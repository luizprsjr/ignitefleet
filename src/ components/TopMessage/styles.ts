import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

const dimensions = Dimensions.get('window')

export const Container = styled.View`
  width: ${dimensions.width}px;

  position: absolute;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.gray_500};
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  margin-left: 4px;
`
