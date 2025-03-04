import { StoreProvider } from "./StoreProvider"
import SearchBar from "../component/loadingSearch/SearchBar"
import Navigation from "../component/Nav/Navigation"
import './global.css'


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div className='heading' >
            <Navigation />
            <SearchBar />
          </div>
          {children} 
        </body>
      </html>
    </StoreProvider>
  )
}
