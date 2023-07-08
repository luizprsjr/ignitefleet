import React, { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import theme from '../../theme'
import { Container, Input, Label } from './styles'

type Props = TextInputProps & {
  label: string
  ref?: React.Ref<TextInput>
}

const LicensePlateInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          maxLength={7}
          autoCapitalize="characters"
          placeholderTextColor={theme.colors.gray_400}
          {...rest}
        />
      </Container>
    )
  }
)

LicensePlateInput.displayName = 'LicensePlateInput'
export { LicensePlateInput }
