import 'normalize.css/normalize.css'
import '.././styles/styles.scss'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

