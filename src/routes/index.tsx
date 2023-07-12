import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import { NavigationContainer } from '@react-navigation/native'

import { TopMessage } from '../ components/TopMessage'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { top } = useSafeAreaInsets()
  return (
    <NavigationContainer>
      <AppRoutes />
      <Toast
        config={{ info: ({ text1 }) => <TopMessage title={String(text1)} /> }}
        topOffset={Platform.OS === 'android' ? top : 40}
      />
    </NavigationContainer>
  )
}
