import { IconProps } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import theme from '../../theme'
import { Container, Title } from './styles'

// eslint-disable-next-line no-undef
type IconBoxProps = (props: IconProps) => JSX.Element

type Props = {
  icon?: IconBoxProps
  title: string
}

export function TopMessage({ title, icon: Icon }: Props) {
  const { top } = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: top + 5 }}>
      {Icon && <Icon size={18} color={theme.colors.gray_100} />}
      <Title>{title}</Title>
    </Container>
  )
}
