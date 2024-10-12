import '../styles/global.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'D\'ale Gurii',
  description: 'Restaurant D\'ale Gurii Pogoanele',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights/>
      <Analytics/>
    </html>
  )
}
