import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import theme from '../../theme'
import { Container, Title } from './styles'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const { top } = useSafeAreaInsets()
  const { goBack } = useNavigation()

  return (
    <Container style={{ paddingTop: top + 42 }}>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={theme.colors.brand_light} />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  )
}
