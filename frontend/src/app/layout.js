import '../styles/global.css'

export const metadata = {
  title: 'Ceunul mic',
  description: 'Site mock-up pentru un restaurant. Nu are niciun scop comercial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
