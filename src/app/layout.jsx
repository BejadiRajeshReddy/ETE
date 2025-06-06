import './globals.css'
import ClientNavbar from '../components/common/Header/ClientNavbar'
import Footer from '@/components/common/Footer/page'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { GoogleTagManager } from '@next/third-parties/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'ETE'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <link rel='icon' href='/ete-company.svg' sizes='any' />
        <GoogleTagManager gtmId='GTM-NQKM3WM7' />
      </head>
      <body className='font-sans antialiased'>
        <ClientNavbar />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQKM3WM7"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>
        {children}
        <Toaster position='top-right' reverseOrder={false} />
        {/* <Footer /> */}
      </body>
    </html>
  )
}