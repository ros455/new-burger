import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/default.scss'
import global from '../styles/Global.module.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import store from '../store'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </Provider>
  )
}
