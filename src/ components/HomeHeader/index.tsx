import { Power } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

import { useUser } from '@realm/react'

import theme from '../../theme'
import { Container, Greeting, Message, Name, Picture } from './styles'

export function HomeHeader() {
  const user = useUser()

  return (
    <Container>
      <Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />

      <Greeting>
        <Message>Olá</Message>
        <Name>{user?.profile.name}</Name>
      </Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.colors.gray_400} />
      </TouchableOpacity>
    </Container>
  )
}
