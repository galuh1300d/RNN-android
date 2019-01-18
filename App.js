import { Navigation } from 'react-native-navigation'

import Login from './src/Login'
import Home from './src/Home'
import AddPost from './src/Admin/AddPost'

Navigation.registerComponent("Login",() => Login)
Navigation.registerComponent("Home",() => Home)
Navigation.registerComponent("AddPost",() => AddPost)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login'
      }
    }
  })
})