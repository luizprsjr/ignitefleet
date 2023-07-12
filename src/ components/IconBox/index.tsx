import { IconProps } from 'phosphor-react-native'

import theme from '../../theme'
import { Container, SizeProps } from './styles'

// eslint-disable-next-line no-undef
export type IconBoxProps = (props: IconProps) => JSX.Element

type Props = {
  size?: SizeProps
  icon: IconBoxProps
}

export function IconBox({ size = 'NORMAL', icon: Icon }: Props) {
  const iconSize = size === 'NORMAL' ? 24 : 16

  return (
    <Container size={size}>
      <Icon size={iconSize} color={theme.colors.brand_light} />
    </Container>
  )
}
