import { X } from 'phosphor-react-native'

import { useRoute } from '@react-navigation/native'

import { Button } from '../../ components/Button'
import { ButtonIcon } from '../../ components/ButtonIcon'
import { Header } from '../../ components/Header'
import {
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from './styles'

type RouteParamsProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  return (
    <Container>
      <Header title="Chegada" />

      <Content>
        <Label>Placa do veículo</Label>

        <LicensePlate>XXX0000</LicensePlate>

        <Label>Finalidade</Label>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          veniam assumenda est laborum doloribus, illo esse et eum, harum
          voluptate nemo quibusdam? Tempora, soluta aspernatur facilis magni
          assumenda facere aperiam!
        </Description>

        <Footer>
          <ButtonIcon icon={X} />
          <Button title="Registrar Chegada" />
        </Footer>
      </Content>
    </Container>
  )
}
