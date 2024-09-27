import Footer from "@component/components/Footer"
import NavBar from "@component/components/NavBar"
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, [])

  if (Component.getLayout) return Component.getLayout(<Component {...pageProps} />)
  return (
    <SessionProvider session={session}>

      <NavBar />
      <Component {...pageProps} />;
      <Footer />

    </SessionProvider>
  )
}
