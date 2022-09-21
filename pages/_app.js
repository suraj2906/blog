import '../styles/globals.css'
import '../assets/components/NavBar/NavBar.modules.css'
import { store } from '../state/store'
import { Provider } from 'react-redux'
import NavBar from '../assets/components/NavBar/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar/>   
    <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
