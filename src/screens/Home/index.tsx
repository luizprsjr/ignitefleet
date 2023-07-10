import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CarStatus } from '../../ components/CarStatus'
import { HomeHeader } from '../../ components/HomeHeader'
import { useQuery } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/historic'
import { Container, Content } from './styles'

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)

  const { navigate } = useNavigation()

  const historic = useQuery(Historic)

  function handleRegisterMovement() {
    navigate('departure')
  }

  const fetchVehicle = useCallback(() => {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0]
      setVehicleInUse(vehicle)
    } catch (error) {
      Alert.alert(
        'Veículo em uso',
        'Não foi possível carregar o veículo em uso.'
      )
      console.log(error)
    }
  }, [historic])

  useEffect(() => {
    fetchVehicle()
  }, [fetchVehicle])

  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMovement}
        />
      </Content>
    </Container>
  )
}
