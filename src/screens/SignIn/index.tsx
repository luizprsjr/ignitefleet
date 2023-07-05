import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { Realm, useApp } from '@realm/react'

import { Button } from '../../ components/Button'
import backgroundImg from '../../assets/background.png'
import { Container, Slogan, Title } from './styles'

WebBrowser.maybeCompleteAuthSession()

export function SignIn() {
  const app = useApp()
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const [, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  function handleGoogleSign() {
    setIsAuthenticating(true)

    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken,
        )
        console.log(credentials)
        app.logIn(credentials).catch((error) => {
          console.log(error)
          Alert.alert(
            'Entrar',
            'Não foi possível conectar-se a sua conta Google',
          )
          setIsAuthenticating(false)
        })
      } else {
        Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google')
        setIsAuthenticating(false)
      }
    }
  }, [response, app])

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title="Entrar com o Google"
        onPress={handleGoogleSign}
        isLoading={isAuthenticating}
      />
    </Container>
  )
}
