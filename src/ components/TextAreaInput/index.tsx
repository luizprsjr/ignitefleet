import { TextInputProps } from 'react-native'

import theme from '../../theme'
import { Label } from '../LicensePlateInput/styles'
import { Container, Input } from './styles'

type Props = TextInputProps & {
  label: string
}

export function TextAreaInput({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        placeholderTextColor={theme.colors.gray_400}
        multiline
        autoCapitalize="sentences"
        {...rest}
      />
    </Container>
  )
}
