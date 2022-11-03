import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

import { Header } from '../components/Header'
import { EcardsProvider } from '../hooks/useEcards'

import '../styles/fonts.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <div className="relative w-full h-full min-h-screen">
    <EcardsProvider>
      <Header />
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </EcardsProvider>
  </div>
)

export default appWithTranslation(MyApp)