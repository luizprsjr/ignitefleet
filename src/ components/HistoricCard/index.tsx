import { Check, ClockClockwise } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

import theme from '../../theme'
import { Container, Departure, Info, LicensePlate } from './styles'

export type HistoricCardProps = {
  licensePlate: string
  created: string
  isSync: boolean
}

type Props = TouchableOpacityProps & {
  data: HistoricCardProps
}

export function HistoricCard({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Info>
        <LicensePlate>{data.licensePlate}</LicensePlate>
        <Departure>{data.created}</Departure>
      </Info>

      {data.isSync ? (
        <Check size={24} color={theme.colors.brand_light} />
      ) : (
        <ClockClockwise size={24} color={theme.colors.gray_400} />
      )}
    </Container>
  )
}
