import { TextInputProps } from 'react-native'

import theme from '../../theme'
import { Container, Input, Label } from './styles'

type Props = TextInputProps & {
  label: string
}

export function LicensePlateInput({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={theme.colors.gray_400}
        {...rest}
      />
    </Container>
  )
}
