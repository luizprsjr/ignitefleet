import React, { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import theme from '../../theme'
import { Label } from '../LicensePlateInput/styles'
import { Container, Input } from './styles'

type Props = TextInputProps & {
  label: string
  ref?: React.Ref<TextInput>
}

const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          placeholderTextColor={theme.colors.gray_400}
          multiline
          autoCapitalize="sentences"
          {...rest}
        />
      </Container>
    )
  },
)

TextAreaInput.displayName = 'TextAreaInput'
export { TextAreaInput }
