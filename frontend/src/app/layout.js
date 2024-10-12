import '../styles/global.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: 'D\'ale Gurii',
  description: 'Site mock-up pentru un restaurant. Nu are niciun scop comercial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
