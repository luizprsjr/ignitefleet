import { useRoute } from '@react-navigation/native'

import { Container } from '../../ components/Loading/styles'

type RouteParamsProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  return <Container />
}
