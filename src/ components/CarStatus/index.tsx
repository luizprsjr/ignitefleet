import { Car, Key } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

import theme from '../../theme'
import { Container, IconBox, Message, TextHighlight } from './styles'

type Props = TouchableOpacityProps & {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null, ...rest }: Props) {
  const Icon = licensePlate ? Car : Key
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso.`
    : `Nenhum veículo em uso.`
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={52} color={theme.colors.brand_light} />
      </IconBox>

      <Message>
        {message}{' '}
        <TextHighlight>Clique aqui para registrar a {status}</TextHighlight>
      </Message>
    </Container>
  )
}
