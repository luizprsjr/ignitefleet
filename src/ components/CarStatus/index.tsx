import { Car, Key } from 'phosphor-react-native'

import theme from '../../theme'
import { Container, IconBox, Message, TextHighlight } from './styles'

type Props = {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null }: Props) {
  const Icon = licensePlate ? Key : Car
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso.`
    : `Nenhum veículo em uso.`
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <Container>
      <IconBox>
        <Icon size={32} color={theme.colors.brand_light} />
      </IconBox>

      <Message>
        {message}{' '}
        <TextHighlight>Clique aqui para registrar a {status}</TextHighlight>
      </Message>
    </Container>
  )
}
