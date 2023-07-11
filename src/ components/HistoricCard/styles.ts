import { styled } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 20px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px;
  margin-bottom: 12px;
`
export const Info = styled.View`
  flex: 1;
`

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`

export const Departure = styled.Text`
  color: ${({ theme }) => theme.colors.gray_200};
  font-size: ${({ theme }) => theme.font_size.xs}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  margin-top: 4px;
`
