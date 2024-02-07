import './globals.css'
import { ContextProvider } from './context/context'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
        <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ContextProvider>
  
  )
}
